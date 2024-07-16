// seeds.js (atau seeds.ts jika menggunakan TypeScript)

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
      },
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        age: 25,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
