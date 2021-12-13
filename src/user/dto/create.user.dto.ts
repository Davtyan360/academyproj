import { Role } from "../../role/role.enum";
import {ApiProperty} from "@nestjs/swagger";
// ************for testing purposes************

export class CreateUserDTO {
  @ApiProperty({
    description: 'Users fullname',
  })
  username?: string;

  @ApiProperty({
    description: 'Users firstname',
  })
  readonly firstName: string;

  @ApiProperty({
    description: 'Users lastname',
  })
  readonly lastName: string;

  @ApiProperty({
    description: 'Users email',
  })
  readonly email: string;

  @ApiProperty({
    description: 'Users phone numbers',
  })
  readonly phone?: string[];

  @ApiProperty({
    description: 'Users google id',
  })
  readonly googleId?: string;

  @ApiProperty({
    description: 'Users refresh token',
  })
  readonly refreshToken?: string;

  @ApiProperty({
    description: 'Users role',
  })
  readonly role?: Role;
}
