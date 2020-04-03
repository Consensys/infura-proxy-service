
export const sendDataError = (res, errorMessage) => {
    return res.status(404).send(errorMessage)
}
