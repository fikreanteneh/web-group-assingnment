import { IsString, IsNumber, IsNotEmpty } from 'class-validator';


export class  CreateNewsDto {
  @IsString()
  @IsNotEmpty()
 newsImage: string;


 @IsString()
 @IsNotEmpty()
 newsUrl: string;
  
}
