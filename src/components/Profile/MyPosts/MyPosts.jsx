import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';
import AddPost from './Post/AddPost/AddPost';

const MyPosts = (props) => {
  let postsElements = props.myPosts.map( p => <Post id={p.id} message={p.message} likes={p.likes} />);

  return(
    <section className={MyPostsStyle.myposts__wrapper}>
      <div className={MyPostsStyle.posts}>
        {postsElements}
        <AddPost />
      </div>
    </section>
  );
}

export default MyPosts;