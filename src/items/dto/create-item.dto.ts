import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ nullable: false })
  name: string;

  @ApiProperty({ nullable: false })
  quantity: number;
}
