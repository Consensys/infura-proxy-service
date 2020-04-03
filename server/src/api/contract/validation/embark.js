import {sendDataError } from "./utils"

const customEmbarkValidation = async (req, res, next) => {
    let body = req.body

    const provider = req.app.get('provider');
    let network = await provider.getNetwork()
    let chainID = network.chainId

    // check that name works
    if (typeof body.name !== "string") {
        return sendDataError(res, "name must be a string")
    }

    // check that  "abi": is an array
    if (!Array.isArray(body.abi)) {
        return sendDataError(res, "abi must be an array")
    }

    if (!body.networks) {
        return sendDataError(res, "body must have networks object")
    }
    if (!body.networks[chainID]) {
        return sendDataError(res, "incorrect networks chain ID value")
    }

    let addressRegex = /0[xX][0-9a-fA-F]{40}/;

    if (!body.networks[chainID].address || !addressRegex.test(body.networks[chainID].address)) {
        return sendDataError(res, "invalid contract address")
    }

    req.contract = {
        name: body.name,
        abi: body.abi,
        address: body.networks[chainID].address
    }

    next()
}

export default customEmbarkValidation