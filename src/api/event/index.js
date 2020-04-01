import models from '@models';

export const getEvent = async (req, res) => {
	let bytes32Regex = /0[xX][0-9a-fA-F]{64}/
	let data;
	const eventName = req.params.eventName;
	try {

		if (bytes32Regex.test(eventName)) {
			data = await models.Event.findAll({
				where: {
					event_topic_hash: eventName,
				},
			});
		} else {
			let meta = await models.EventMeta.find({
				where: {
					event_bare_name: eventName
				}
			})
            let eventHash = meta['event_topic_hash']
			data = await models.Event.findAll({
				where: {
					event_topic_hash: eventHash,
				},
			});
		}
		return res.send({ status: 'cache', data });
	} catch (error) {
		console.log(error);
		return res.send(error)
	}
}


export const listEvents = async (req, res) => {
	let data;
	let model = models.EventMeta
	try {
		data = await model.findAll({});
		return res.send({ function: 'listEvents', data });
	} catch (error) {
		console.log(error);
		return res.send(error)
	}
};

export const eventTester = async (req, res) => {
	let bytes32Regex = /0[xX][0-9a-fA-F]{64}/
	let data;
	const eventName = req.params.eventName;
	try {

		if (bytes32Regex.test(eventName)) {
			data = await models.Event.findAll({
				where: {
					event_topic_hash: eventName,
				},
			});
		} else {
			let meta = await models.EventMeta.find({
				where: {
					event_bare_name: eventName
				}
			})
            let eventHash = meta['event_topic_hash']
			data = await models.Event.findAll({
				where: {
					event_topic_hash: eventHash,
				},
			});
		}
		return res.send({ status: 'cache', data });
	} catch (error) {
		console.log(error);
		return res.send(error)
	}
}
