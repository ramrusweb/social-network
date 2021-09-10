import SidebarStyle from './Sidebar.module.css';

const Sidebar = () => {
  return(
    <sidebar className={SidebarStyle.sidebar}>
      <nav className={SidebarStyle.nav__menu}>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/dialogs">Messages</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </sidebar>
  );
}

export default Sidebar;