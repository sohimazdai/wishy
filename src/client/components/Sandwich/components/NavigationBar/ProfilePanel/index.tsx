import React from 'react';

import ProfileIcon from './ProfileIcon';

import { IUser } from '../../../../../../shared/models/user';

interface Props {
  user: IUser | null;
  onOpenAuthFormClick: () => void;
  onLogout: () => void;
}

export default class ProfilePanel extends React.Component<Props> {
  render() {
    const { user, onOpenAuthFormClick, onLogout } = this.props;

    if (user) {
      return (
        <div
          className="sandwich_navigationBar_rightSideTab"
          onClick={onLogout}
        >
          <ProfileIcon />
          <span>&nbsp;&nbsp;{user.email}</span>
        </div>
      );
    }

    return (
      <div
        className="sandwich_navigationBar_rightSideTab"
        onClick={onOpenAuthFormClick}
      >
        <ProfileIcon />&nbsp;&nbsp;Войти
      </div>
    );
  }
}
