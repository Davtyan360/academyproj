import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import {ApiProperty} from "@nestjs/swagger";

export type MessageDocument = Message & Document;

@Schema()
export class Message {
    @ApiProperty({
        description: 'Message sender',
    })
    @Prop({required: true})
    from: string // mongoose.Schema.Types.ObjectId

    @ApiProperty({
        description: 'Message taker',
    })
    @Prop({required: true})
    to: string // mongoose.Schema.Types.ObjectId

    @ApiProperty({
        description: 'Message text',
    })
    @Prop({required: true})
    text: string

    @ApiProperty({
        description: 'Create date',
    })
    @Prop({required: true})
    createdAt: Date

    @ApiProperty({
        description: 'Update date',
    })
    @Prop({required: true})
    updatedAt: Date


    @ApiProperty({
        description: 'Seen users',
    })
    @Prop()
    seen: [mongoose.Schema.Types.ObjectId]
}

export const MessageSchema = SchemaFactory.createForClass(Message)
