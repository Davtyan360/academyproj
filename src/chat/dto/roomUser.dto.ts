import {ApiProperty} from "@nestjs/swagger";

export class RoomUserDto {
    @ApiProperty({
        description: 'User id',
    })
    _id: string
    @ApiProperty({
        description: 'User firstname',
    })
    firstName: string;
    @ApiProperty({
        description: 'User lastname',
    })
    lastName: string;
    @ApiProperty({
        description: 'User email',
    })
    email: string;
    @ApiProperty({
        description: 'User status',
    })
    status: string;

    constructor(id,firstName,lastName,email,status) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
    }
}
