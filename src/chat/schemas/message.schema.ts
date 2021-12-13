import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from "mongoose";

export type MessageDocument = Message & Document;

@Schema()
export class Message {
    @Prop({required: true})
    from: mongoose.Schema.Types.ObjectId

    @Prop({required: true})
    to: mongoose.Schema.Types.ObjectId

    @Prop({required: true})
    text: string

    @Prop({required: true})
    createdAt: Date

    @Prop({required: true})
    updatedAt: Date

    @Prop()
    seen: [mongoose.Schema.Types.ObjectId]
}

export const MessageSchema = SchemaFactory.createForClass(Message)
