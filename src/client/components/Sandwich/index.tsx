import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import AuthorizationForm from './components/AuthorizationForm';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

import { IUser } from '../../../shared/models/user';
import { IStorage } from '../../../shared/models/storage';
import { createClearUserAction } from '../../store/items/user';
import { api } from '../../api';

const mapState = (state: IStorage) => ({
  user: state.user,
});

const mapDispatch = (dispatch: Dispatch<Action>) => ({
  onLogout: () => dispatch(createClearUserAction()),
});

interface Props {
  children: React.ReactElement;
  user: IUser | null,
  onLogout: () => void,
  isAuthZone: boolean,
}

function Sandwich(props: Props): JSX.Element {
  const { children, user, onLogout, isAuthZone } = props;

  const [authFormOpen, setAuthFormOpen] = useState(false);

  const onLogoutClick = useCallback(async () => {
    await api.post('auth/logout');
    onLogout();
  }, []);

  const isRouteUnlocked = useMemo(() => {
    if (isAuthZone && !user) {
      return false;
    }

    return true;
  }, [user, isAuthZone]);

  console.log('🤖🤖🤖🤖 isRouteUnlocked', isRouteUnlocked);

  return (
    <>
      <NavigationBar
        user={user}
        onProfileIconCick={() => setAuthFormOpen(true)}
        onLogout={onLogoutClick}
      />
      {isRouteUnlocked && children}
      <AuthorizationForm
        open={authFormOpen || !isRouteUnlocked}
        onClose={() => setAuthFormOpen(false)}
      />
      <Footer />
    </>
  );
}

export default connect(mapState, mapDispatch)(Sandwich);
