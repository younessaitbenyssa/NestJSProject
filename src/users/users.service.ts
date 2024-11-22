
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Client)
    private usersRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Client | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Client> {
    const user = await this.findOne(id);

    if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Update user properties with new values
    Object.assign(user, updateUserDto);

    return await this.usersRepository.save(user);
}

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<Client> {
    const newUser = this.usersRepository.create(createUserDto); // Create a new user instance
    return this.usersRepository.save(newUser); // Save it to the database
  }


}
