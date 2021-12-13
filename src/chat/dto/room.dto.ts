import {RoomUserDto} from "./roomUser.dto";
import {ApiProperty} from "@nestjs/swagger";

export class RoomDTO {
    @ApiProperty({
        description: 'Room id',
    })
    readonly _id: string;

    @ApiProperty({
        description: 'Room name',
    })
    name:string;

    @ApiProperty({
        description: 'Users array',
    })
    users: Array<RoomUserDto>;
}
