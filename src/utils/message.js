const message = (res, message, code, data = null) => {
  return res.status(code).json({
    message,
    data,
  });
};

export default message;
