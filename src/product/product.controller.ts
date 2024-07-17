import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductModel } from "./product.model";

@Controller('api/product/')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return this.productService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Post()
  async create(@Body() data: ProductModel) {
    return this.productService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ProductModel) {
    return this.productService.update(+id, data);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string) {
    return this.productService.delete(+id);
  }

}
