import { PrismaService } from "src/prisma/prisma.service";
import { UserModel } from "./user.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: UserModel) {
    return this.prisma.user.create({ data });
  }

  async update(id: number, data: UserModel) {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

}