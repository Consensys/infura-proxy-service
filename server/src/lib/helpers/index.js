export const eventToQuery = (event) => {
  Object.keys(event).forEach((key) => {
    if (
      key == 'event_abi' ||
      key == 'json_event' ||
      key == 'raw_event'
    ) {
      event[key] = JSON.stringify(event[key]);
    } else {
      event[key] = event[key];
    }
  });
  return event;
};
