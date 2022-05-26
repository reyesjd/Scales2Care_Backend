import User from "../models/user.model.js"; // import user model
import message from "../utils/message.js"; // import message

export const createUser = async (req, res) => {
  try {
    const { dni, name, lastname, age, gender } = req.body;

    if (!dni) {
      return message(res, "Atributos incorrectos.", 400);
    }

    let user = await User.findOne({ dni });

    if (!user) {
      user = await User.create({
        dni,
        name,
        lastname,
        age,
        gender,
      });
    }

    return message(res, "Paciente creado con exito!", 200, { id: user._id });
  } catch (error) {
    return message(res, error.message, 500);
  }
};
