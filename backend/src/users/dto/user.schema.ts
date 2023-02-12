import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema()
export class User{
    
    @Prop({require: true,unique:true})
    email: String

    @Prop({require: true})
    hash: String 

    @Prop({require: true, default:Date.now})
    created: Date
    @Prop({default:0})
    role:Number 
}
 
export const UserSchema = SchemaFactory.createForClass(User)