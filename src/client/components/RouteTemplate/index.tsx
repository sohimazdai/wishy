import { Route, RouteProps } from 'react-router-dom';

import Sandwich from '../Sandwich';

interface Props extends RouteProps {
  isAuthZone?: boolean
  children: React.ReactElement
}

export default function RouteTemplate(props: Props): JSX.Element {
  const { children, isAuthZone, ...routeProps } = props;

  return (
    <Route
      {...routeProps}
      component={() => (
        <Sandwich isAuthZone={!!isAuthZone}>
          {children}
        </Sandwich>
      )}
    />
  )
}
