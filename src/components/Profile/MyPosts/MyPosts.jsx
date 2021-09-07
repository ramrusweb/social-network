import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return(
    <section className={MyPostsStyle.myposts__wrapper}>
    <div className={MyPostsStyle.posts}>
        <Post />
        <Post />
    </div>
    </section>
  );
}

export default MyPosts;