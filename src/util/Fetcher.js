export const doFetch = (url, method, event, actions) => {
  const data = new FormData(event.target);
  const payload = Object.fromEntries(data);

  const defaultAction = () => alert("Something went wrong!"); //TODO: add i18n

  if (!actions) {
    actions = {};
  }

  const responseHandler = (response) => {
    const handler = actions[response.status] || actions.default || defaultAction;
    handler();
  };

  fetch(url, {
    method: method,
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  }).then(responseHandler);
};
