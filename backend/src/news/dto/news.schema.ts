import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NewDocument = HydratedDocument<New>

@Schema()
export class New{
        
    @Prop({require: true})
    newsImage: String


    @Prop({require: true})
    newsUrl: String 

}
 
export const NewSchema = SchemaFactory.createForClass(New)