import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import App from '../../client/components/App';

import { rootReducer } from '../../client/store';
import { UserAction } from '../../client/store/items/user';

export function renderApp(req: Request): { appString: string, state: any } {
  const store = createStore(rootReducer);
  const user = req.user as any;

  if (user) {
    store.dispatch({
      type: UserAction.SetUser,
      payload: {
        id: user._id,
        email: user.email,
        registeredAt: user.registeredAt,
      },
    });
  }

  console.log('🤖🤖🤖🤖 state: store.getState()', store.getState());

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.originalUrl}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = ReactDOMServer.renderToString(app);

  return { appString: html, state: store.getState() };
};
