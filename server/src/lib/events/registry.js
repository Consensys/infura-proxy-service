
let eventModels = {}

export const registerEventModel = (name, model) => {
  eventModels[name] = model
}

export const getEventModel = (name) => {
  if (eventModels[name]) {
    return eventModels[name]
  }
  return eventModels
}

export const modelExists = (name) => {
  if (eventModels[name]) {
    return true
  }
  return false
}