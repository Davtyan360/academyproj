import { Passenger } from "../trip.passenger.interface";
import { TripStatus } from "../trip.status.enum";
import {ApiProperty} from "@nestjs/swagger";
// ************for testing purposes************
export class CreateTripDTO {

  @ApiProperty({
    description: 'Passangers array',
  })
  readonly passengers?: Passenger[];

  @ApiProperty({
    description: 'location',
  })
  readonly location?: string;
  // TODO change to required, also change the service

  @ApiProperty({
    description: 'Date',
  })
  date?: Date;

  @ApiProperty({
    description: 'Start point',
  })
  readonly startPoint: string;

  @ApiProperty({
    description: 'Endpoint',
  })
  readonly endPoint: string;

  @ApiProperty({
    description: 'Stops',
  })
  readonly stops?: string[];

  @ApiProperty({
    description: 'Seats count',
  })
  readonly freeSeatCount: string;

  @ApiProperty({
    description: 'Vehicle',
  })
  // TODO change the vehicle not optional/optional
  readonly vehicle: string;

  @ApiProperty({
    description: 'Driver',
  })
  readonly driver: string;

  @ApiProperty({
    description: 'channel',
  })
  readonly channel?: string;

  @ApiProperty({
    description: 'status',
  })
  readonly status?: TripStatus;
}
