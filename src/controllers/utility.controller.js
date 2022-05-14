import message from "../utils/message.js";

export const checkConnection = (req, res) => {
  return message(res, "Connection is established", 200);
};
