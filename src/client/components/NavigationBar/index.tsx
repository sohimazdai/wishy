import { useEffect } from 'react';

import MainIcon from './MainIcon';
import NavBarItem from './NavBarItem';
import Palette from '../Palette';

import { Routes } from '../../../shared/routes';
import { api } from '../../api';

export default function NavigationBar() {
  useEffect(() => {
    // TODO: remove when app will become stable
    api.post('/health').then((res) => console.log('🤖🤖🤖🤖 ping', res));
  });

  return (
    <div className="navigationBar">
      <div className="navigationBar_tabs">
        <NavBarItem
          to={Routes.MAIN}
          item={<MainIcon />}
        />
        <NavBarItem
          to={Routes.PROFILE}
          item="Profile"
        />
      </div>
      <Palette />
    </div>
  );
}
