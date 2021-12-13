import {ApiProperty} from "@nestjs/swagger";

export class PatchDeviceDto {

    @ApiProperty({
        description: 'User id',
    })
    readonly user: string;

    @ApiProperty({
        description: 'Token',
    })
    readonly token: string;
}