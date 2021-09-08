import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return(
    <section className={MyPostsStyle.myposts__wrapper}>
    <div className={MyPostsStyle.posts}>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="It's my first post" likes="20" />
    </div>
    </section>
  );
}

export default MyPosts;