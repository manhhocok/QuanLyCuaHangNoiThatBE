import { Module } from '@nestjs/common';
import { MaterialsController } from './controllers/materials/materials.controller';
import { MaterialsService } from './services/materials/materials.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from 'src/typeom/entities/materials.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Material])],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {}
