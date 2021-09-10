import SidebarStyle from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return(
    <sidebar className={SidebarStyle.sidebar}>
      <nav className={SidebarStyle.nav__menu}>
        <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/dialogs">Messages</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/music">Music</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    </sidebar>
  );
}

export default Sidebar;