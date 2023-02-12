import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options:CorsOptions = {
    origin:"*",
    methods:'PUT,POST,DELETE,GET'
  }
  app.enableCors(options)
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }));
  // app.useStaticAssets(join(__dirname, '..', 'public'), {
  //   prefix: 'assets/image',
  // });
  await app.listen(3000);
}
bootstrap();
