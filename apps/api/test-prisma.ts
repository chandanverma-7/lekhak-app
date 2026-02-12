import "dotenv/config"
import { PrismaClient } from "./generated/prisma/client"
import { createPgAdapter } from "@prisma/adapter-pg"

const adapter = createPgAdapter({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.$connect()
  console.log("✅ CONNECTED OK")
  await prisma.$disconnect()
}

main().catch(console.error)
