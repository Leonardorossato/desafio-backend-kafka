import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ nullable: false })
  @IsNotEmpty()
  phone: string;
}
