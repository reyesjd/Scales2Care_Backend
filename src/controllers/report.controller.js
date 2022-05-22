import message from "../utils/message.js";
import scaleResult from "../models/scaleResult.model.js";

export const getReportBySphere = async (req, res) => {
  try {
    const spheres = ["BIOLOGICO", "PSICOLOGICO", "SOCIAL"];
    const results = {};

    for (let i = 0; i < spheres.length; i++) {
      const sphere = spheres[i];
      const sphereResults = await scaleResult.find({ sphere });
      results[sphere] = sphereResults;
    }

    return message(
      res,
      "Reporte por spheras obtenido correctamente.",
      200,
      results
    );
  } catch (error) {
    console.log(error);
    return message(res, error.message, 500);
  }
};

export const getReportByScale = async (req, res) => {
  try {
    const { name } = req.params;

    if (!name) {
    } else {
      const results = await scaleResult.find({ scale: name });
    }
  } catch (error) {}
};
