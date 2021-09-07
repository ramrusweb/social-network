import AppStyle from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';

const App = () => {
  return(
    <div className={AppStyle.app__wrapper}>
      <Header />
      <Sidebar />
      <Profile />
      <MyPosts />
    </div>
  );
}

export default App;
