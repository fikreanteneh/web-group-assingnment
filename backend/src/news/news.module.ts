import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { New, NewSchema } from './dto/news.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: New.name, schema: NewSchema }])],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
