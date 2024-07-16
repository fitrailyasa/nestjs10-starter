import { Prisma } from "@prisma/client";

export class UserModel implements Prisma.UserCreateInput {
    id?: number;
    name: string;
    email: string;
    age: number;
}