import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ErrorSchema = new Schema(
  {
    error_message: { type: String, required: true },
    component: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Error", ErrorSchema);
