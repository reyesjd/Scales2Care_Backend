import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    dni: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default model("User", UserSchema);
