import * as mongoose from "mongoose";

export const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    default: [0, 0],
    required: true,
  },
});
