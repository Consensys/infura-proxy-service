
let eventModels = {}

export const registerEventModel = (name, model) => {
  eventModels[name] = model
}

export const getEventModel = (name) => {
    if (name) {
      return eventModels[name]
    }
    return eventModels
}