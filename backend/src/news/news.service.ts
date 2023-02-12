import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto.js';
import { New, NewDocument } from './dto/news.schema.js';


@Injectable()
export class NewsService {

  constructor(@InjectModel(New.name) private NewModel: Model<NewDocument>){}

  async create(createNewDto:CreateNewsDto): Promise<New> {
    const createdNew = new this.NewModel(createNewDto);
    return await createdNew.save();
  }

  async findAll(): Promise<{}> {
    const News= { "News":await this.NewModel.find().sort({_id: -1}).limit(6), "message": "Succesful"}
    return News
    
  }

  async findOne(id:string): Promise<New> {
    try{
      return await this.NewModel.findById(id).exec();
    }catch(err){
      throw new HttpException(`Item with ID ${id} not found`,HttpStatus.NOT_FOUND)
    }

}


  async update(id:string, updateNew: CreateNewsDto): Promise<New> {
    try {
      return await this.NewModel.findByIdAndUpdate(id, updateNew, {new: true})
    }catch(err){
      throw new HttpException(`Item with ID ${id} not found`,HttpStatus.NOT_FOUND)
    }

  }


  async remove(id:string) {
    try{
      return await this.NewModel.findByIdAndRemove(id);
    }catch(err){
      throw new HttpException(`Item with ID ${id} not found`,HttpStatus.NOT_FOUND)
    }
  }
}
