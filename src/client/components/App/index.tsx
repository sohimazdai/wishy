import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import Profile from '../Profile';

import { Routes } from '../../../shared/routes';

export default function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Switch>
        <Route
          path={Routes.MAIN}
          exact={true}
          render={() => <h1>SLASH</h1>}
        />

        <Route
          path={Routes.PROFILE}
          exact={true}
          component={Profile}
        />
      </Switch>
    </div>
  )
}
