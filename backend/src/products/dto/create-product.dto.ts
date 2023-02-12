import { IsString, IsNumber, IsNotEmpty } from 'class-validator';


export class  CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productTitle: string;

  @IsString()
  productImage: string;

  @IsNumber()
  @IsNotEmpty()
  productPrice: number;

  @IsString()
  @IsNotEmpty()
  startDate: Date;

  @IsString()
  @IsNotEmpty()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  productDescription: string;

  
}
