import SidebarStyle from './Sidebar.module.css';
import {NavLink, BrowserRouter, Route} from 'react-router-dom';
import Friends from './Friends/Friends';

const Sidebar = (props) => {
  return(
    <BrowserRouter>
      <sidebar className={SidebarStyle.sidebar}>
          <nav className={SidebarStyle.nav__menu}>
            <ul>
              <li><NavLink to="/profile" activeClassName={SidebarStyle.active_link}>Profile</NavLink></li>
              <li><NavLink to="/dialogs" activeClassName={SidebarStyle.active_link}>Messages</NavLink></li>
              <li><NavLink to="/news" activeClassName={SidebarStyle.active_link}>News</NavLink></li>
              <li><NavLink to="/music" activeClassName={SidebarStyle.active_link}>Music</NavLink></li>
              <li><NavLink to="/settings" activeClassName={SidebarStyle.active_link}>Settings</NavLink></li>
            </ul>
          </nav>
      <Route exact path="/" render={ () => <Friends state={props.state} /> } />
      <Route exact path="/profile" render={ () => <Friends state={props.state} /> } />
      </sidebar>
    </BrowserRouter>
  );
}

export default Sidebar;