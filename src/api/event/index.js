import {getEventModel} from "@events/registry"

export const getEvent = async (req, res) => {
    let data;
    const eventName = req.params.eventName;
    let model = getEventModel(eventName)
  
    try {

      data = await model.findAll({      });
      
      return res.send({ status: 'cache', data });
      
    } catch (error) {
      console.log(error);
      return res.send(error)
    }
};

export const listEvents = async (req, res) => {
    let data;

    let models = getEventModel()
  
    try {
    data = Object.keys(models)
      return res.send({ function: 'listEvents', data });
      
    } catch (error) {
      console.log(error);
      return res.send(error)
    }
};

export const eventTester = async (req, res) => {
    let data;
    const eventName = req.params.eventName;

    let model = getEventModel(eventName)
  
    try {
      data = await model.findAll({      });
      return res.send({ status: 'cache', data });
    } catch (error) {
      console.log(error);
      return res.send(error)
    }
}
