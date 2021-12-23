import {Controller, Get, Param, Patch} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.interface";
import {ApiOkResponse, ApiOperation} from "@nestjs/swagger";
import {UpdateUserDto} from "./dto/update.user.dto";


@Controller("users")
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOkResponse({
        description:"empty",
        type: String
    })
    @ApiOperation({summary:"get user by google id"})
    @Get('google/:id')
    async findByGoogleId(@Param('id') id:string):Promise<User> {
        return this.userService.findByGoogleId(id);
    }

    @ApiOkResponse({
        description:"empty",
        type: String
    })
    @ApiOperation({summary:"get user by email id"})
    @Get('email/:id')
    async findeByEmail(@Param('id') id:string):Promise<User> {
        return this.userService.findByEmail(id);
    }

    @ApiOkResponse({
        description:"empty",
        type: String
    })
    @ApiOperation({summary:"get user by id"})
    @Get(':id')
    async findeById(@Param('id') id:string):Promise<User> {
        return this.userService.findById(id);
    }

    @ApiOkResponse({
        description:"empty",
        type: UpdateUserDto
    })
    @ApiOperation({summary:"update user by id"})
    @Patch(':id')
    async updateById(@Param('id') id:string):Promise<User> {
        return this.userService.findById(id);
    }


}
