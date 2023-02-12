import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      return next();
    }

    const token = bearerToken.split(' ')[1];
    

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user= decoded as { _id: string, email: string, role:Number };
    } catch (error) {
      console.error(error);
    }

    next();
  }
}
