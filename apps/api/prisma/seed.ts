import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "demo@lekhak.app",
      name: "Demo User",
      password: "demo123456", // later we hash in auth flow
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
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
