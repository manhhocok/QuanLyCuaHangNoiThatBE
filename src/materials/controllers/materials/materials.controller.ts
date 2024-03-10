import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { bodyMaterialDto } from 'src/materials/dtos/bodyMaterial.dto';
import { MaterialsService } from 'src/materials/services/materials/materials.service';
@ApiTags('materials')
@Controller('materials')
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
  async createMaterials(@Body() body: bodyMaterialDto) {
    return await this.materialsService.create(body);
  }

  @Put(':material_id')
  async updateMaterials(
    @Body() body: bodyMaterialDto,
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
