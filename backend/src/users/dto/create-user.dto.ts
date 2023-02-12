import { IsString, IsNotEmpty, IsEmail } from 'class-validator';


export class  userDto {
  @IsEmail()
  @IsNotEmpty()
 email: string;

  @IsString()
  @IsNotEmpty()
 password: string;
 
  
}
