// seeds.js (atau seeds.ts jika menggunakan TypeScript)
// npx ts-node prisma/seeds/seeds.ts

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

  await prisma.category.createMany({
    data: [
      {
        name: 'Category 1',
        desc: 'Category 1 description',
        img: 'https://example.com/category1.jpg',
      },
      {
        name: 'Category 2',
        desc: 'Category 2 description',
        img: 'https://example.com/category2.jpg',
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Product 1',
        desc: 'Product 1 description',
        img: 'https://example.com/product1.jpg',
        price: 10.99,
        categoryId: 1,
      },
      {
        name: 'Product 2',
        desc: 'Product 2 description',
        img: 'https://example.com/product2.jpg',
        price: 19.99,
        categoryId: 2,
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
