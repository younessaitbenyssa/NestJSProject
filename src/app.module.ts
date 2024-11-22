import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './users/entities/user.entity';
import { CategoriesModule } from './categories/categories.module';
import { BrandModule } from './brand/brand.module';
import { ProductsModule } from './products/products.module';
import { Brand } from './brand/entities/brand.entity';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'electronicsstore',
    entities: [Client, Brand,Category],
    synchronize: false,
  }),UsersModule, CategoriesModule, BrandModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
