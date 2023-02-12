import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/add")
  adder(@Body() numbers: {first:number, second:number}){
    const added = numbers.first + numbers.second 
    return {result: added}

  }
}
