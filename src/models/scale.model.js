import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ScaleSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    sphere: {
      type: String,
      enum: ["Biológica o Clínica", "Psicológica o Mental", "Social", "Triple"],
    },
    questions: [
      {
        question: String,
        answers: [
          {
            answer: String,
            value: Number,
          },
        ],
      },
    ],

    interpretations: {
      results: [
        {
          min: Number,
          max: Number,
          result: String,
        },
      ],
      titles: [String],
    },
    state: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model("Scale", ScaleSchema);
