import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {RoomUserDto} from "../dto/roomUser.dto";

export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    users: [RoomUserDto]
}

export const RoomSchema = SchemaFactory.createForClass(Room)
