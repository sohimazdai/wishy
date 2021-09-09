import { Switch, Route } from 'react-router-dom';

import Profile from '../Profile';

import { Routes } from '../../../shared/routes';
import RouteTemplate from '../RouteTemplate';

export default function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Switch>
          <RouteTemplate
            path={Routes.MAIN}
            exact={true}
          >
            <h1>SLASH</h1>
          </RouteTemplate>

          <RouteTemplate
            path={Routes.PROFILE}
            exact={true}
            isAuthZone={true}
          >
            <Profile />
          </RouteTemplate>
        </Switch>
      </div>
    </div>
  )
}
