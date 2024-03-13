import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CraeteVoucherDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  percent: number;
  @ApiProperty()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  image: string;
}

export class UpdateVoucherDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  percent: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
}
