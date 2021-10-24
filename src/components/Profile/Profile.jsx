import ProfileInfo from './../Profile/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return(
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
      </div>
  );
}

export default Profile;