import Error from "../models/error.model.js";
import Pqr from "../models/pqr.model.js";
import message from "../utils/message.js";

export const checkConnection = (req, res) => {
  return message(res, "Connection is established", 200);
};

export const addError = async (req, res) => {
  try {
    const { error_message, component } = req.body;

    if (!error_message || !component) {
      return message(res, "Atributos incorrectos.", 400);
    }

    const error = await Error.create({
      error_message,
      component,
    });

    return message(res, "Error añadido con exito!", 200, {
      id: error._id,
    });
  } catch (error) {
    console.log(error);
    return message(res, error.message, 500);
  }
};

export const addPqr = async (req, res) => {
  try {
    const { pqr_message, pqr_email } = req.body;

    if (!pqr_message) {
      return message(res, "Atributos incorrectos.", 400);
    }

    const pqr = await Pqr.create({
      pqr_message,
      pqr_email,
    });

    return message(res, "PQR añadido con exito!", 200, {
      id: pqr._id,
    });
  } catch (error) {
    console.log(error);
    return message(res, error.message, 500);
  }
};
