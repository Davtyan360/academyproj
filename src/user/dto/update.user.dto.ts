import { CreateUserDTO } from "./create.user.dto";

// ************for testing purposes************
//TODO must be fixed which fields are permitted to update and pick them for interface
export class UpdateUserDto implements Partial<CreateUserDTO> {}
