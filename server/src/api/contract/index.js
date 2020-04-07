import { initContractEvents } from '@events/event';
import { contractDataToEventTopics } from '@events/utils';

import models from '@models';

export const newContract = async (req, res) => {
  const provider = req.app.get('provider');

  let body = req.body;

  //TODO add fromBlock parser
  let fromBlock = body.fromBlock;
  if (!fromBlock) {
    fromBlock = process.env.EVENT_FROM_BLOCK
      ? parseInt(process.env.EVENT_FROM_BLOCK)
      : 0;
  }

  req.contract['event_topics'] = await contractDataToEventTopics(
    provider,
    req.contract
  );
  let contract;
  try {
    contract = await models.Contract.create(req.contract);
    await initContractEvents(provider, req.contract, fromBlock);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(418).send('Duplicate!');
    } else {
      res.status(500).send(err);
    }
  }

  res.send({ contract });
};

export const listContracts = async (req, res) => {
  let data;
  let model = models.Contract;
  try {
    data = await model.findAll({});
    return res.send({ function: 'listContracts', data });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
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
