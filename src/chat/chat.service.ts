import { Injectable } from "@nestjs/common";
import {Room, RoomDocument} from "./schemas/room.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "../user/user.interface";
import {RoomUserDto} from "./dto/roomUser.dto";
import {RoomDTO} from "./dto/room.dto";

@Injectable()
export class ChatService {

    constructor(
        @InjectModel(Room.name) private roomModel: Model<RoomDocument>,
        @InjectModel("User") private userModel: Model<User>
    ) {
    }

    public createRoom(data: RoomDTO): Promise<Room> {
        return new this.roomModel({name: data.name, users: data.users}).save();
    }

    public async addUser({roomId,userId}): Promise<void> {
        let room: RoomDTO = await this.roomModel.findById(roomId);
        let user: User = await this.userModel.findById(userId);
        let users: Array<RoomUserDto> = room.users;
        users.push(new RoomUserDto(user._id,user.firstName,user.lastName,user.email,"pending"))
        this.roomModel.updateOne(
            { "_id": room._id},
            {$set: {"users": users}},
            {upsert: true}
        );
    }
    public async changeStatus({roomId, userId, status}): Promise<void>{
        let room: RoomDTO = await this.roomModel.findById(roomId);
        let users = room.users;
        if(status === "reject"){
            users = users.filter(user=> user._id !== userId)
        }
        else{
            users = users.map((user)=> {
                if(user._id === userId){
                    user.status = "accept";
                }
                return user;
            })
        }
        this.roomModel.updateOne(
            { "_id": room._id},
            {$set: {"users": users}},
            {upsert: true}
        );
    }
}
