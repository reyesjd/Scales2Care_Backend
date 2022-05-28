import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ScaleResultSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    sphere: {
      type: String,
      enum: ["Biológica o Clínica", "Psicológica o Mental", "Social", "Triple"],
    },
    total: { type: Number, required: true },
    interpretation: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("ScaleResult", ScaleResultSchema);
