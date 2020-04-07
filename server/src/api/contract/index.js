import { initNewContract } from '@events/contracts';
import models from '@models';

export const newContract = async (req, res) => {
    const provider = req.app.get('provider');

    const FROM_BLOCK = process.env.EVENT_FROM_BLOCK
        ? parseInt(process.env.EVENT_FROM_BLOCK)
        : 0;

    //TODO add fromBlock parser
    await initNewContract(provider, req.contract, FROM_BLOCK);
    res.send({ ok: 'good' }); //TODO
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
