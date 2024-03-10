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
import { bodyVoucherDto } from 'src/vouchers/dtos/bodyVoucher.dto';
import { VouchersService } from 'src/vouchers/services/vouchers/vouchers.service';

@ApiTags('Vouchers')
@Controller('vouchers')
export class VouchersController {
  constructor(private VouchersService: VouchersService) {}

  @Get()
  getListVouchers() {
    return this.VouchersService.findAll();
  }

  @Get(':voucher_id')
  getVoucherDetails(@Param('voucher_id') voucher_id: number) {
    return this.VouchersService.findOne(voucher_id);
  }

  @Post()
  createVoucher(@Body() bodyVoucherDto: bodyVoucherDto) {
    return this.VouchersService.create(bodyVoucherDto);
  }

  @Put(':voucher_id')
  async updateVoucher(
    @Param('voucher_id') voucher_id: number,
    @Body() bodyVoucherDto: bodyVoucherDto,
  ) {
    await this.VouchersService.edit(voucher_id, bodyVoucherDto);
    return this.getListVouchers();
  }

  @Delete(':voucher_id')
  async deleteVoucher(@Param('voucher_id') voucher_id: number) {
    await this.VouchersService.remove(voucher_id);
    return this.getListVouchers();
  }
}
