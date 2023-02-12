import { IsEmail, IsString, IsNotEmpty, IsNumber, IsOptional} from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsOptional()
  role:Number;
}

