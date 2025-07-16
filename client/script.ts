import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const words = await prisma.word.findMany();
  console.log(words);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
