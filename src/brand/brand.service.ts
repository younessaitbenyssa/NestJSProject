import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private  brandRepository : Repository <Brand>,
  ){}
  createBrand(createBrandDto: CreateBrandDto) : Promise <Brand> {
    const newBrand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(newBrand);
  }

  findAll() {
    return this.brandRepository.find();
  }

  findOne(brand_id: number): Promise<Brand | null> {
    return this.brandRepository.findOneBy({ brand_id });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
