import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedProducts = async () => {
  const count = await prisma.products.count();
  if (count === 0) {
    await prisma.products.createMany({
      data: [
        {
          title: 'Product 1',
          price: 500,
          description: 'Product 1 description',
        },
        {
          title: 'Product 2',
          price: 700,
          description: 'Product 2 description',
        },
        {
          title: 'Product 3',
          price: 1200,
          description: 'Product 3 description',
        },
      ],
    });
  }
};

// jalankan seed jika tidak ada data di database
seedProducts();

// get Products
export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // cek query
  if (query) {
    return prisma.products.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }

  // jika tidak ada query
  return prisma.products.findMany();
}

// get Product by id
export async function getProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.products.findUnique({
    where: { id: id },
    // where: {id:} // atau bisa pakai ini
  });
}

// create Product
export async function createProduct(
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.products.create({
    data: {
      title: title,
      price,
      description,
    },
  });
}

// update Product
export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.products.update({
    where: { id },
    data: {
      title,
      price,
      description,
    },
  });
}

// delete Product
export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.products.delete({
    where: { id },
  });
}
