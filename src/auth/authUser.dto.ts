import {ApiProperty} from "@nestjs/swagger";
import {CreateUserDTO} from "../user/dto/create.user.dto";

export class AuthUserDto {

    @ApiProperty({
        description: 'Create user',
    })
    data: CreateUserDTO;

    @ApiProperty({
        description: 'Token',
    })
    readonly accessToken: string;
}