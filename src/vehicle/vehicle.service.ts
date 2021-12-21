import { Injectable } from "@nestjs/common";
import {VehicleDto} from "./dto/vehicle.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Vehicle, VehicleDocument} from "./schemas/vehicle.schema";

@Injectable()
export class VehicleService {

    constructor(
        @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>
    ) {
    }
    public createVehicle(data:VehicleDto):Promise<Vehicle>{
        return new this.vehicleModel({ ...data }).save();
    }

}
