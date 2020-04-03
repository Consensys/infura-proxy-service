import {sendDataError } from "./utils"

const customRawValidation = async (req, res, next) => {
    let body = req.body

    // check that name works
    if (typeof body.name !== "string") {
        return sendDataError(res, "name must be a string")
    }

    // check that  "abi": is an array
    if (!Array.isArray(body.abi)) {
        return sendDataError(res, "abi must be an array")
    }

    let addressRegex = /0[xX][0-9a-fA-F]{40}/;

    if (!addressRegex.test(body.address)) {
        return sendDataError(res, "invalid contract address")
    }

    req.contract = {
        name: body.name,
        abi: body.abi,
        address: body.address
    }

    next()
}

export default customRawValidation