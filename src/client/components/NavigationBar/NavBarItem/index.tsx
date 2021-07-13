import { RouteComponentProps, NavLink, withRouter } from 'react-router-dom';
import cn from 'classnames';
import React from 'react';

type Props = RouteComponentProps & {
  to: string,
  item: JSX.Element | string,
}

function NavBarItem(props: Props): JSX.Element {
  const { to, item, location } = props;

  const cnsLink = cn(
    'navigationBar_tab',
    { 'navigationBar_tab-active': location.pathname === to },
  );

  return (
    <NavLink
      to={`${to}`}
      className={cnsLink}
    >
      {item}
    </NavLink>
  )
}

export default withRouter(NavBarItem);
