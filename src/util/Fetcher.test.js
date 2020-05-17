import React from "react";
import { render } from '@testing-library/react';

import { doFetch } from './Fetcher';

test('renders learn react link', async () => {
  const event = {
    target: document.createElement("form")
  };

  const actions = {
    200: () => true
  };

  jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({status: 200}));

  const result = doFetch("/api/user/login", "POST", event, actions);
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
