import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    age: { type: Number, required: true },
    gender: { type: String, enum: ["M", "F"], required: true },
  },
  { timestamps: true }
);

export default model("User", UserSchema);
