import MainIcon from './MainIcon';
import NavBarItem from './NavBarItem';

export default function NavigationBar() {
  return (
    <div className="navigationBar">
      <NavBarItem
        to="/"
        item={<MainIcon />}
      />
      <NavBarItem
        to="/profile"
        item="Profile"
      />
    </div>
  )
}
