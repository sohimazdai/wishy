import { RouteComponentProps, withRouter, Link } from 'react-router-dom';

type Props = RouteComponentProps;

function NavigationBar(props: Props) {
  const { match: { path } } = props;

  return (
    <div className="navigationBar">
      <Link to={'/'}>
        <div className="navigationBar_tab">
          Main
        </div>
      </Link>
      <Link to={'/profile'}>
        <div className="navigationBar_tab">
          Profile
        </div>
      </Link>
    </div>
  )
}

export default withRouter(NavigationBar);
