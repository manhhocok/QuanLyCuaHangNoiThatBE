import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateMaterialDto,
  UpdateMaterialDto,
} from 'src/materials/dtos/bodyMaterial.dto';
import { MaterialsService } from 'src/materials/services/materials/materials.service';
@ApiTags('materials')
@Controller('api/materials')
export class MaterialsController {
  constructor(private materialsService: MaterialsService) {}

  @Get()
  async getListMaterials() {
    return await this.materialsService.findAll();
  }

  @Get(':material_id')
  async getDetailMaterials(@Param('material_id') material_id: number) {
    return await this.materialsService.findOne(material_id);
  }

  @Post()
  async createMaterials(@Body() body: CreateMaterialDto) {
    return await this.materialsService.create(body);
  }

  @Patch(':material_id')
  async updateMaterials(
    @Body() body: UpdateMaterialDto,
    @Param('material_id') material_id: number,
  ) {
    await this.materialsService.edit(body, material_id);
    return this.getListMaterials;
  }

  @Delete(':material_id')
  async delateMaterials(@Param('material_id') material_id: number) {
    await this.materialsService.remove(material_id);
    return this.getListMaterials();
  }
}
