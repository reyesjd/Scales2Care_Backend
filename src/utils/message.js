const message = (res, message, code, data = null) => {
  res.status(code).json({
    message,
    data,
  });
};

export default message;
