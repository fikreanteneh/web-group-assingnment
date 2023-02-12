import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

import { AuthDto } from './dto/auth.dto';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    
  ) {}

  async logIn(dto: AuthDto): Promise<any> {   
    console.log(dto)
    const user = await this.userService.findOne(dto.email);
    
    if (!user) {
      throw new ForbiddenException('user does not exist');
    }
    
    const confirmation = await argon.verify(user['hash'].toString(), dto.password);
    

    if (!confirmation) {
      return {"status": "ok",
              "message":'Wrong password'}
      
    }
    const token= this.signature(user['_id'].toString(), dto.email, user.role)
    
    try {
      const role = await this.getRoleFromToken((await token).token);
      return {"role":role,"token":(await token).token}
    } catch (error) {
      console.error(error);
    }
    
  
  }
  async signUp(dto: AuthDto): Promise<any> {
    const hash=await argon.hash(dto.password);

    const userData={email:dto.email,hash,role:dto.role}
    try {
      const user = await this.userService.create(userData);
      // console.log(user);
      const token=this.signature(user['_id'].toString(), dto.email,dto.role);
      return {"status":true,"token":(await token).token}
    } catch (e) {
      if (e.code === 11000) {
        return {"status":false,"message":'Email already exists'}
      }
     
    }
  }

  private async signature(_id: string, email: string, role:Number): Promise<{ token: string }> {
    const payload = { sub: _id, email,role };

    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '30m',
    });

    return { token };
  }

  async getRoleFromToken(token: string): Promise<string> {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded['role'];
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}