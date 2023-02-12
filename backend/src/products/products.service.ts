import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Product, ProductDocument } from './dto/product.schema.ts';
import { CreateProductDto } from './dto/create-product.dto.js';


@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}

  async create(createProductDto:CreateProductDto): Promise<Product> {
    createProductDto["productImage"] = `http://localhost:3000/${createProductDto["productImage"]}`
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<{}> {
    const res=await this.productModel.find().sort({_id: -1}).limit(4);
    const products = { "products":res}
    return products
  }

  async findOne(id:string): Promise<Product> {
    try{
      return await this.productModel.findById(id).exec();
    }catch(err){
      throw new HttpException(`Item with ID ${id} not found`,HttpStatus.NOT_FOUND)
    }

}


  async update(id:string, updateProduct: CreateProductDto): Promise<Product> {
    try {
      updateProduct["productImage"] = `http://localhost:3000/${updateProduct["productImage"]}`
      return await this.productModel.findByIdAndUpdate(id, updateProduct, {new: true})
    }catch(err){
      throw new HttpException(`Item with ID ${id} not found`,HttpStatus.NOT_FOUND)
    }

  }


  async remove(id:string) {
    try{
      return await this.productModel.findByIdAndRemove(id);
    }catch(err){
      throw new HttpException(`Item with ID ${id} not found`,HttpStatus.NOT_FOUND)
    }
  }
}
