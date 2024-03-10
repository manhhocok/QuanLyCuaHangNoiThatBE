import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from 'src/typeom/entities/materials.entity';
import { bodyMaterialParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material) private repository: Repository<Material>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(material_id: number) {
    return this.repository.findOneBy({ material_id });
  }

  create(body: bodyMaterialParams) {
    const newMaterial = this.repository.create({ ...body });
    return this.repository.save(newMaterial);
  }

  edit(body: bodyMaterialParams, material_id: number) {
    return this.repository.update(material_id, { ...body });
  }

  remove(material_id: number) {
    return this.repository.delete(material_id);
  }
}
