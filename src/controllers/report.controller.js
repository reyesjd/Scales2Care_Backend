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
    return message(res, error.message, 500);
  }
};

export const getReportByScale = async (req, res) => {
  try {
    let names = await scaleResult.distinct("name");

    const results = {};

    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const scaleResults = await scaleResult.find({ name });

      const riskPorcentage = [];
      const totals = scaleResults.map((scaleResult) => scaleResult.total);

      const min = Math.min(...totals);
      const max = Math.max(...totals);

      results[name] = {
        total: scaleResults.length,
        results: scaleResults,
      };
    }

    return message(
      res,
      "Reporte por escala obtenido correctamente.",
      200,
      results
    );
  } catch (error) {
    return message(res, error.message, 500);
  }
};

export const getScaleResultsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const scaleResults = await scaleResult.aggregate(
      getScaleResultsByUsersAggregate(id)
    );

    return message(res, "Escalas obtenidas correctamente.", 200, scaleResults);
  } catch (error) {
    return message(res, error.message, 500);
  }
};

const getScaleResultsByUsersAggregate = (dni) => {
  return [
    {
      $match: {
        dni: dni,
      },
    },
    {
      $lookup: {
        from: "scaleresesults",
        localField: "_id",
        foreignField: "user_id",
        as: "scaleresesults",
      },
    },
  ];
};
