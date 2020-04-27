export const doFetch = (url, method, event) => {
  const gatewayUrl = process.env.GATEWAY_URL || "http://localhost:8080";
  const data = new FormData(event.target);
  const payload = Object.fromEntries(data);

  fetch(gatewayUrl + url, {
    method: method,
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  });
};
