import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Client } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}