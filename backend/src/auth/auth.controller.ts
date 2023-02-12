import { Controller, Post, Body, HttpException, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { AuthDto } from './dto/dtoExporter';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() authDto: AuthDto) {
    // const { email, password } = authDto;
 
    return await this.authService.logIn(authDto);

  }

  @Post('register')
  async register(@Body() authDto: AuthDto) {
    try {
      return await this.authService.signUp(authDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }
}
