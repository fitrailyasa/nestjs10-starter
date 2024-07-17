import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryModel } from "./category.model";

@Controller('api/category/')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Post()
  async create(@Body() data: CategoryModel) {
    return this.categoryService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CategoryModel) {
    return this.categoryService.update(+id, data);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    return this.categoryService.delete(+id);
  }

}
