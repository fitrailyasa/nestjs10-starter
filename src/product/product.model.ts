import { Prisma } from "@prisma/client";

export class ProductModel implements Prisma.ProductUncheckedCreateInput {
    id?: number;
    name: string;
    desc?: string | null;
    img?: string | null;
    price: number | 0;
    categoryId: number;
}