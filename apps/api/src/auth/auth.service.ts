import { Injectable, ConflictException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import { UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";


@Injectable()
export class AuthService {
  constructor(
  private prisma: PrismaService,
  private jwt: JwtService,
) {}


  async register(dto: RegisterDto) {
    // ✅ hash password
    const hashed = await bcrypt.hash(dto.password, 12);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          password: hashed,
        },
      });

      return {
        id: user.id,
        email: user.email,
      };

    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2002"
      ) {
        throw new ConflictException("Email already registered");
      }
      throw e;
    }
  }


  async login(dto: LoginDto) {
  const user = await this.prisma.user.findUnique({
    where: { email: dto.email },
  });

  if (!user) {
    throw new UnauthorizedException("Invalid credentials");
  }

  const ok = await bcrypt.compare(dto.password, user.password);

  if (!ok) {
    throw new UnauthorizedException("Invalid credentials");
  }

  const payload = {
    sub: user.id,
    email: user.email,
  };

  const accessToken = await this.jwt.signAsync(payload, {
    secret: process.env.JWT_ACCESS_SECRET,
    expiresIn: process.env.JWT_ACCESS_EXPIRES as any,
  });

  const refreshToken = await this.jwt.signAsync(payload, {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: process.env.JWT_REFRESH_EXPIRES as any,
  });

  return { accessToken, refreshToken };
}


}
