import {sendDataError } from "./utils"

const customEmbarkValidation = async (req, res, next) => {
    let body = req.body

    // check that name works
    if (typeof body.className !== "string") {
        return sendDataError(res, "className must be a string")
    }

    // check that  "abi": is an array
    if (!Array.isArray(body.abiDefinition)) {
        return sendDataError(res, "abiDefinition must be an array")
    }

    let addressRegex = /0[xX][0-9a-fA-F]{40}/;

    if (!body.deployedAddress || !addressRegex.test(body.deployedAddress)) {
        return sendDataError(res, "invalid contract deployedAddress")
    }

    req.contract = {
        name: body.className,
        abi: body.abiDefinition,
        address: body.deployedAddress
    }

    next()
}

export default customEmbarkValidation