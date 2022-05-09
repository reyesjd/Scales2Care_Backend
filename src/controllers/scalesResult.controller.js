import ScaleResult from "../models/scaleResult.model.js"; // import scaleResult model
import User from "../models/user.model.js"; // import user model

import message from "../utils/message.js";

export const addScaleResult = async (req, res) => {
  try {
    const { user_id, name, sphere, total } = req.body;

    if (!user_id || !name || !sphere || !total) {
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
    });

    return message(res, "Escala añadida con exito!", 200, {
      id: scaleResult._id,
    });
  } catch (error) {
    return message(res, error.message, 500);
  }
}; // add scaleResult
