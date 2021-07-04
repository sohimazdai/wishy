import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import Profile from '../Profile';

export default function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Switch>
        <Route
          path='/'
          exact={true}
          render={() => <h1>SLASH</h1>}
        />

        <Route
          path='/profile'
          exact={true}
          component={() => <Profile />}
        />
      </Switch>
    </div>
  )
}
