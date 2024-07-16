import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserModel } from "./user.model";

@Controller('api/user/')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  async create(@Body() data: UserModel) {
    return this.userService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UserModel) {
    return this.userService.update(+id, data);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }

}
