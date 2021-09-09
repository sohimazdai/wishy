import { useEffect } from 'react';

import MainIcon from './MainIcon';
import NavBarItem from './NavBarItem';
import ProfilePanel from './ProfilePanel';
import Palette from './Palette';

import { IUser } from '../../../../../shared/models/user';
import { api } from '../../../../api';
import { Routes } from '../../../../../shared/routes';

interface Props {
  user: IUser | null;
  onProfileIconCick: () => void;
  onLogout: () => void;
}

export default function NavigationBar(props: Props) {
  const { user, onProfileIconCick, onLogout } = props;

  useEffect(() => {
    // TODO: remove when app will become stable
    api.post('/health').then((res) => console.log('🤖🤖🤖🤖 ping', res));
  });

  return (
    <div className="sandwich_navigationBar">
      <div className="sandwich_navigationBar_tabs">
        <NavBarItem
          to={Routes.MAIN}
          item={<MainIcon />}
        />
        <NavBarItem
          to={Routes.PROFILE}
          item="Profile"
        />
      </div>
      <div className="sandwich_navigationBar_tabs">
        <ProfilePanel
          user={user}
          onOpenAuthFormClick={onProfileIconCick}
          onLogout={onLogout}
        />
        <Palette />
      </div>
    </div>
  );
}
