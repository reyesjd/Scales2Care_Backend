import Scale from "../models/scale.model.js";
import message from "../utils/message.js";

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
