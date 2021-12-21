import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from "mongoose";

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
    @Prop({required: true})
    make: string;

    @Prop({required: true})
    model: string;

    @Prop({required: true})
    driver: string;

    @Prop({required: true})
    free_seat_count: number;

    @Prop({required: true})
    color: string;

    @Prop({required: true})
    plate_number: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)
