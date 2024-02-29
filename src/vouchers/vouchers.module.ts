import { Module } from '@nestjs/common';
import { VouchersController } from './controllers/vouchers/vouchers.controller';
import { VouchersService } from './services/vouchers/vouchers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from 'src/typeom/entities/voucher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher])],
  controllers: [VouchersController],
  providers: [VouchersService],
})
export class VouchersModule {}
