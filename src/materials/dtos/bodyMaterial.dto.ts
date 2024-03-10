import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class bodyMaterialDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  image: string;
}
