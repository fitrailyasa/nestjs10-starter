import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [UserModule, CategoryModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
