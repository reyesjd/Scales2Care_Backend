import Scale from "../models/scale.model.js";
import message from "../utils/message.js";

export const addScale = async (req, res) => {
  try {
    const { name, description, sphere, questions, interpretations } = req.body;

    const scale = new Scale({
      name,
      description,
      sphere,
      questions,
      interpretations,
    });

    await scale.save();

    return message(res, "Scale created successfully", 200);
  } catch (error) {
    return message(res, error, 500);
  }
};

export const getScales = async (req, res) => {
  try {
    const scales = await Scale.find({ state: true });
    console.log(scales);
    return message(res, "Scales retrieved successfully", 200, scales);
  } catch (error) {
    return message(res, error, 500);
  }
};

export const getScale = async (req, res) => {
  try {
    const { id } = req.params;
    const scale = await Scale.findOne({ _id: id, state: true });

    if (!scale) {
      return message(res, "Scale not found", 404);
    }

    return message(res, "Scale retrieved successfully", 200, scale);
  } catch (error) {
    return message(res, error, 500);
  }
};

export const removeScale = async (req, res) => {
  try {
    const { id } = req.params;
    const scale = await Scale.findOneAndUpdate({ _id: id }, { state: false });

    if (!scale) {
      return message(res, "Scale not found", 404);
    }

    return message(res, "Scale removed successfully", 200);
  } catch (error) {
    return message(res, error, 500);
  }
};
