import ProfileInfo from './../Profile/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return(
    <div>
      <ProfileInfo />
      <MyPosts myPosts={props.myPosts} />
      </div>
  );
}

export default Profile;