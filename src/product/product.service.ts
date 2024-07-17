import { PrismaService } from "src/prisma/prisma.service";
import { ProductModel } from "./product.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: ProductModel) {
    return this.prisma.product.create({ data });
  }

  async update(id: number, data: ProductModel) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }

}