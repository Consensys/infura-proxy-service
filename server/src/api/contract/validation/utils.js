export const sendDataError = (res, errorMessage) => {
  return res.status(400).send(errorMessage);
};
