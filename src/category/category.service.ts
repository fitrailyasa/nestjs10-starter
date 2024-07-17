import { PrismaService } from "src/prisma/prisma.service";
import { CategoryModel } from "./category.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async create(data: CategoryModel) {
    return this.prisma.category.create({ data });
  }

  async update(id: number, data: CategoryModel) {
    return this.prisma.category.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }

}