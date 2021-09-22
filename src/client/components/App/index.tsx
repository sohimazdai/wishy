import { Switch } from 'react-router-dom';

import Profile from '../Profile';
import RouteTemplate from '../RouteTemplate';
import MainPage from '../../pages/MainPage';
import CreateWishPage from '../../pages/CreateWishPage';
import CreateWishlistPage from '../../pages/CreateWishlistPage';

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
            path={Routes.PROFILE}
            exact={true}
            isAuthZone={true}
          >
            <Profile />
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
        </Switch>
      </div>
    </div>
  )
}
