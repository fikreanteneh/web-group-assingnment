import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/dto/user.schema';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.register({}),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), 
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
