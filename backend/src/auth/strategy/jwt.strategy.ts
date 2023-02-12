import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { UserService } from '../../users/users.service';

dotenv.config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secret: process.env.JWT_SECRET,
    });
  }
  async validate(payload: { sub: string; email: string; role: number }) {
    const user = await this.userService.findOneById(payload.sub);
    if (!user) { 
      throw new UnauthorizedException("invalid credentials")
    }
    return user;
  }
}