import {Body, Controller, Patch, Post} from "@nestjs/common";
import {VehicleService} from "./vehicle.service";
import {ApiOkResponse, ApiOperation} from "@nestjs/swagger";
import {VehicleDto} from "./dto/vehicle.dto";


@Controller("vehicle")
export class VehicleController {
    constructor(private vehicleService: VehicleService) {}

    @ApiOkResponse({
        description:"empty",
        type: VehicleDto
    })
    @ApiOperation({summary:"creating vehicle"})
    @Post()
    async createRoom(@Body() body:VehicleDto) {
        console.log(body)
        return this.vehicleService.createVehicle(body);
    }

}
