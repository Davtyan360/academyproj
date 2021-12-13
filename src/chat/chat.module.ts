import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Message, MessageSchema } from "./schemas/message.schema";
import {ChatGatway} from "./chat.gatway";
import { Room, RoomSchema } from './schemas/room.schema';
import {ChatController} from "./chat.controller";
import {ChatService} from "./chat.service";
import {UserSchema} from "../user/user.schema";

@Module({
    //*******************user module for demo and testing proposes*******************
    imports: [MongooseModule.forFeature([
        {name: Message.name, schema: MessageSchema},
        {name: Room.name, schema: RoomSchema},
        {name: "User", schema: UserSchema }
    ])],
    providers: [ChatGatway,ChatService],
    controllers: [ChatController],
})
export class ChatModule {}
