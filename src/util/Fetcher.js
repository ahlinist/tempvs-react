export const doFetch = (url, method, event) => {
  const data = new FormData(event.target);
  const payload = Object.fromEntries(data);

  fetch(url, {
    method: method,
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  });
};
