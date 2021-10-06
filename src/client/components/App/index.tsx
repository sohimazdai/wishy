import { Switch } from 'react-router-dom';

import RouteTemplate from '../RouteTemplate';
import MainPage from '../../pages/MainPage';
import CreateWishPage from '../../pages/CreateWishPage';
import CreateWishlistPage from '../../pages/CreateWishlistPage';
import WishlistPage from '../../pages/WishlistPage';
import { AlertList } from '../AlertList';

import { Routes } from '../../../shared/routes';

export default function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Switch>
          <RouteTemplate
            path={Routes.MAIN}
            exact={true}
          >
            <MainPage />
          </RouteTemplate>

          <RouteTemplate
            path={Routes.CreateWish}
            exact={true}
            isAuthZone={true}
          >
            <CreateWishPage />
          </RouteTemplate>

          <RouteTemplate
            path={Routes.CreateWishlist}
            exact={true}
            isAuthZone={true}
          >
            <CreateWishlistPage />
          </RouteTemplate>

          <RouteTemplate
            path={Routes.WishlistById}
            exact={true}
            isAuthZone={true}
          >
            <WishlistPage />
          </RouteTemplate>
        </Switch>
        <AlertList />
      </div>
    </div>
  )
}
