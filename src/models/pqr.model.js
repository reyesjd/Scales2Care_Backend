import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PqrSchema = new Schema(
  {
    pqr_message: { type: String, required: true },
    pqr_date: { type: Date, required: true, default: Date.now },
    pqr_email: { type: String },
  },
  { timestamps: true }
);

export default model("Pqr", PqrSchema);
