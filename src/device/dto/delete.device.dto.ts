import {ApiProperty} from "@nestjs/swagger";

export class DeleteDeviceDto {

    @ApiProperty({
        description: 'User id',
    })
    readonly user: string;
}