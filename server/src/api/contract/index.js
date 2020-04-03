import { initContractEvents } from '@events/contracts';

export const newContract = async (req, res) => {

    const provider = req.app.get('provider');

    await initContractEvents(provider, req.contract)
    res.send({ok: "good"})
}




import truffle from "./validation/truffle"
import raw from "./validation/raw"
import embark from "./validation/embark"

export const validation = {
    truffle,
    raw,
    embark
}