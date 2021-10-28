import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import App from '../../client/components/App';

import { rootReducer } from '../../client/store';
import { createSetUserAction, UserAction } from '../../client/store/items/user';
import { createSetWishlistAction } from '../../client/store/items/wishlists';
import WishlistService from '../services/wishlist';
import { IWishlist } from '../../shared/models/wishlist';
import getPageNames from './get-page-names';

export async function renderApp(req: Request): Promise<{ appString: string, state: any }> {
  const pageNames = getPageNames(req);
  const store = createStore(rootReducer);
  const user = req.user as any;
  const wishlists: IWishlist[] = await WishlistService.getAllByUserId(user?.id);

  if (user) {
    store.dispatch(createSetUserAction(user));
  }

  store.dispatch(createSetWishlistAction(wishlists));

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
