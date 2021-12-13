import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId, Types } from "mongoose";
import mongoose from "mongoose";
import { NotificationService } from "src/notification/notification.service";

import { Trip } from "./trip.interface";

import { CreateTripDTO } from "./dto/create.trip.dto";
import { PatchTripDto } from "./dto/patch.trip.dto";

import { TripStatus } from "./trip.status.enum";
import { UserService } from "src/user/user.service";
import { PassengerStatus } from "./trip.passenger.status.enum";

@Injectable()
export class TripService {
  constructor(
    @InjectModel("Trip") private readonly tripModel: Model<Trip>,
    private readonly notificationService: NotificationService,
    private readonly userService: UserService
  ) {}

  async create(trip: CreateTripDTO): Promise<Trip> {
    // TODO date is just for test
    trip.date = new Date();
    const newUser = new this.tripModel(trip);
    return newUser.save();
  }

  async updateById(tripId: string, data: PatchTripDto): Promise<void> {
    const { passengers } = await this.tripModel.findByIdAndUpdate(tripId, data);
    await this.notificationService.notifyPassengersTripUpdate(passengers);
  }

  async cancel(tripId: string): Promise<void> {
    const { passengers } = await this.tripModel.findByIdAndUpdate(tripId, {
      status: TripStatus.CANCELLED,
    });
    await this.notificationService.notifyPassengersTripCancel(passengers);
  }

  async getByStatus(status: TripStatus): Promise<Array<Trip>> {
    return await this.tripModel.find({ status });
  }

  async join(tripId: string, userId: string | ObjectId): Promise<void> {
    // TODO check uniqueness of passenger
    const { driver } = await this.tripModel.findByIdAndUpdate(
      { _id: tripId },
      {
        // "passengers.user": { $ne: userId},
        $push: {
          passengers: {
            user: userId,
            status: PassengerStatus.PENDING,
            date: Date.now(),
          },
        },
      }
    );
    const user = await this.userService.findById(userId);
    // TODO change name into notifyDriverAboutTripJoinRequest something like this, and change also the other ones
    this.notificationService.notifyDriverPassengerWantsToJoin(driver, user);
  }
  // TODO think about type of ids (string, object id)
  async confirmJoin(tripId: string, userId: string): Promise<void> {
    const trip = await this.tripModel.findById(tripId);
    trip.passengers.map((passenger) => {
      if (passenger.user.toString() === userId)
        passenger.status = PassengerStatus.SUCCESS;
      return passenger;
    });
    trip.save();

    this.notificationService.notifyPassengerJoinRequestIsConfirmed(userId);
  }

  async rejectJoin(tripId: string, userId: string): Promise<void> {
    const trip = await this.tripModel.findById(tripId);
    trip.passengers = trip.passengers.filter(
      (passenger) => passenger.user.toString() === userId
    );
    trip.save();

    this.notificationService.notifyPassengerJoinRequestIsRejected(userId);
  }
}
