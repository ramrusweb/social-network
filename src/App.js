import AppStyle from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return(
    <div className={AppStyle.app__wrapper}>
      <Header />
      <Sidebar />
      <div className={AppStyle.app__wrapper__content}>
        <Route path="/profile" render={ () => <Profile state={props.state.profilePage} /> } />
        <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage} /> } />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
