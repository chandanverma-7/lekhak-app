import "dotenv/config"
// import { PrismaClient } from "@prisma/client"
import { PrismaClient } from "../generated/prisma/client"
import { PgAdapter } from "@prisma/adapter-pg"

import { createPgAdapter } from "@prisma/adapter-pg"

const adapter = createPgAdapter({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })



async function main() {
  const user = await prisma.user.create({
    data: {
      email: "demo@lekhak.app",
      name: "Demo User",
      password: "hashed_password_here",
    },
  });

  await prisma.job.create({
    data: {
      title: "Sample Job",
      description: "Test job record",
      language: "en",
      status: "queued",
      userId: user.id,
    },
  });

  console.log("✅ Seed data created");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
