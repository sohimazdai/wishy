import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

import { Counter } from '../counter';
import { Post } from '../post';
import { Vbros } from '../vbros';

export function App() {
  return (
    <div className='app_wrapper'>
      {/* navigation */}
      <div className='ui-app__navigation'>
        <Link
          className='ui-app__navigation__link'
          activeClassName='ui-app__navigation__link--active'
          to='/'
          exact={true}
        >Counter</Link>

        <Link
          className='ui-app__navigation__link'
          activeClassName='ui-app__navigation__link--active'
          to='/vbros'
          exact={true}
        >Vbros</Link>

        <Link
          className='ui-app__navigation__link'
          activeClassName='ui-app__navigation__link--active'
          to='/post'
          exact={true}
        >Post</Link>
      </div>

      <Switch>
        <Route
          path='/'
          exact={true}
          render={() => <Counter name='Monica Geller' />}
        />

        <Route
          path='/vbros'
          exact={true}
          component={Vbros}
        />

        <Route
          path='/post'
          exact={true}
          component={Post}
        />
      </Switch>

    </div>
  );
}
