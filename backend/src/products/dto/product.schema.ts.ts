import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product{

    @Prop({require: true})
    productTitle: String
        
    @Prop({require: true})
    productDescription: String

    @Prop({require: true})
    productPrice: Number

    @Prop({require: true})
    productImage: String 

    @Prop({require: true})
    startDate: Date

    @Prop({require: true})
    endDate: Date

}
 
export const ProductSchema = SchemaFactory.createForClass(Product)