import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, minLength: 5, maxLength: 100 })
    name: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ required: true })
    price: number

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ required: true, minProperties: 1 })
    images: String[]
}