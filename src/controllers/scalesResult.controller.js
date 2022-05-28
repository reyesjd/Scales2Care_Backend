import ScaleResult from "../models/scaleResult.model.js"; // import scaleResult model
import User from "../models/user.model.js"; // import user model

import message from "../utils/message.js";

export const addScaleResult = async (req, res) => {
  try {
    const { user_id, name, sphere, total, interpretation } = req.body;

    if (!user_id || !name || !sphere || total < 0 || !interpretation) {
      return message(res, "Atributos incorrectos.", 400);
    }

    const user = await User.findById(user_id);

    if (!user) {
      return message(res, "Usuario no encontrado.", 404);
    }

    const scaleResult = await ScaleResult.create({
      user_id,
      name,
      sphere,
      total,
      interpretation,
    });

    return message(res, "Escala añadida con exito!", 200, {
      id: scaleResult._id,
    });
  } catch (error) {
    return message(res, error.message, 500);
  }
}; // add scaleResult

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
};

export const getScaleResultsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const scaleResults = await ScaleResult.find(
      {},
      { name: 1, sphere: 1, total: 1, interpretation: 1, user_id: 1, _id: 0 }
    ).populate("user_id");
    let results = scaleResults.filter((item) => {
      return item.user_id.dni === id;
    });

    const names = groupBy(results, "name");

    const namesChart = Object.keys(names).map((key) => {
      return [key, names[key].length];
    });

    const spheres = groupBy(results, "sphere");

    const spheresChart = Object.keys(spheres).map((key) => {
      return [key, spheres[key].length];
    });
    return message(res, "Resultados obtenidas correctamente.", 200, {
      data: results,
      names: namesChart,
      spheres: spheresChart,
    });
  } catch (error) {
    return message(res, error.message, 500);
  }
};
