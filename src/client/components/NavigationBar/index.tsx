import MainIcon from './MainIcon';
import NavBarItem from './NavBarItem';

import { Routes } from '../../../shared/routes';
import Palette from '../Palette';

export default function NavigationBar() {
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
  )
}
