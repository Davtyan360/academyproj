import {Body, Controller, Patch, Post} from "@nestjs/common";
import {ChatService} from "./chat.service";
import {Room} from "./schemas/room.schema";
import {ApiOkResponse, ApiOperation} from "@nestjs/swagger";
import {CreateDeviceDTO} from "../device/dto/create.device.dto";
import {RoomDTO} from "./dto/room.dto";

@Controller("rooms")
export class ChatController {
    constructor(private chatService: ChatService) {}

    @ApiOkResponse({
        description:"empty",
        type: CreateDeviceDTO
    })
    @ApiOperation({summary:"creating room"})
    @Post()
    async createRoom(@Body() body:RoomDTO):Promise<Room> {
        return this.chatService.createRoom(body);
    }

    @ApiOkResponse({
        description:"empty",
        type: CreateDeviceDTO
    })
    @ApiOperation({summary:"add user"})
    @Patch()
    async addUser(@Body() body:any):Promise<void> {
        return this.chatService.addUser(body);
    }

    @ApiOkResponse({
        description:"empty",
        type: CreateDeviceDTO
    })
    @ApiOperation({summary:"change status"})
    @Patch('users')
    async changeStatus(@Body() body:any):Promise<void>{
        return this.chatService.changeStatus(body)
    }
    
     @ApiOkResponse({
        description:"empty",
        type: Message
    })
    @ApiOperation({summary:"add message"})
    @Post('message')
    async addMessage(@Body() body:any):Promise<void>{
        const socket = io(process.env.SOCKET_URL, { transports: ['websocket'] });
        socket.emit('room', {data: body.data, id: body.id});
    }
}
