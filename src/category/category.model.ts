import { Prisma } from "@prisma/client";

export class CategoryModel implements Prisma.CategoryUncheckedCreateInput {
    id?: number;
    name: string;
    desc?: string | null;
    img?: string | null;
}