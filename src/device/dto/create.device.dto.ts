import {ApiProperty} from "@nestjs/swagger";

export class CreateDeviceDTO {

  @ApiProperty({
    description: 'User id',
  })
  readonly user: string;

  @ApiProperty({
    description: 'Token',
  })
  readonly token: string;

  @ApiProperty({
    description: 'OS',
  })
  readonly os?: string;
}
