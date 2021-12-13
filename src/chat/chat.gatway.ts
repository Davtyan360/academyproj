import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import { Socket } from 'socket.io';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Message, MessageDocument} from "./schemas/message.schema";



@WebSocketGateway(+process.env.SOCKET_PORT)
export class ChatGatway {
    constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {
    }

    @WebSocketServer()
    server;

    @SubscribeMessage('room')
    async handleChat(@MessageBody() data: any, @ConnectedSocket() client: Socket): Promise<void> {
        let message = await new this.messageModel({
            from: data.userid,
            to: data.roomid,
            text: data.message,
            createdAt:Date.now(),
            updatedAt:Date.now(),
            seen:[]
        }).save();
        this.server.emit('room', {roomId: data.roomid, message: message});
    }
}
