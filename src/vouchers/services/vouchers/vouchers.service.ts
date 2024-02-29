import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from 'src/typeom/entities/voucher.entity';
import { bodyVoucherParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Voucher) private voucherRepository: Repository<Voucher>,
  ) {}

  findAll() {
    return this.voucherRepository.find();
  }

  findOne(voucher_id: number) {
    return this.voucherRepository.findOneBy({ voucher_id });
  }

  create(body: bodyVoucherParams) {
    const newVoucher = this.voucherRepository.create({ ...body });
    return this.voucherRepository.save(newVoucher);
  }

  edit(voucher_id: number, body: bodyVoucherParams) {
    return this.voucherRepository.update(voucher_id, { ...body });
  }

  remove(voucher_id: number) {
    return this.voucherRepository.delete(voucher_id);
  }
}
