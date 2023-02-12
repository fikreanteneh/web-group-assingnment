import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserMiddleware } from './middleware/user.middleware';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/eacc'), 
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'public'),}),
    ProductsModule, 
    NewsModule, 
    UsersModule, 
    AuthModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('*');
  }

}