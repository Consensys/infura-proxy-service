import { initContractEvents } from '@events/contracts';

export const newContract = async (req, res) => {
    const provider = req.app.get('provider');

    await initContractEvents(provider, req.contract);
    res.send({ ok: 'good' });
};


export const listContracts = async (req, res) => {
    let data;
    let model = models.Contract;
    try {
        data = await model.findAll({});
        return res.send({ function: 'listContracts', data });
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
};


import truffle from './validation/truffle';
import raw from './validation/raw';
import embark from './validation/embark';

export const validation = {
    truffle,
    raw,
    embark,
};
