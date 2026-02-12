import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
  secret: process.env.JWT_ACCESS_SECRET || "dev_fallback_secret",
  signOptions: {
    expiresIn: (process.env.JWT_ACCESS_EXPIRES || "15m") as any,
  },
}),

  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
