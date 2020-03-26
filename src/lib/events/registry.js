
let eventModels = {}

export const registerEventModel = (name, model) => {
  eventModels[name] = model
}

export const getEventModel = (name) => {
    return eventModels[name]
}