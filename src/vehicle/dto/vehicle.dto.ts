
import {ApiProperty} from "@nestjs/swagger";
import {ObjectId} from "mongoose";

export class VehicleDto {


    @ApiProperty({
        description: 'Car make',
    })
    make: string;

    @ApiProperty({
        description: 'Car model',
    })
    model: string;

    @ApiProperty({
        description: 'Car driver',
    })
    driver: string;

    @ApiProperty({
        description: 'Cars free seat count',
    })
    free_seat_count: number;

    @ApiProperty({
        description: 'Car color',
    })
    color: string;

    @ApiProperty({
        description: 'Cars plate number',
    })
    plate_number: string;
}
