import { Module } from '@nestjs/common';
import { ProductTypesController } from './controllers/product_types/product_types.controller';
import { ProductTypesService } from './services/product_types/product_types.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from 'src/typeom/entities/product_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType])],
  controllers: [ProductTypesController],
  providers: [ProductTypesService],
})
export class ProductTypesModule {}
