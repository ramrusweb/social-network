import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';
import AddPost from './Post/AddPost/AddPost';

const MyPosts = () => {

  let myPosts = [
    {id: 1, message: "Hi, how are you?", likes: 15},
    {id: 2, message: "It's my first post", likes: 20}
  ];

  let postsElements = myPosts
    .map( p => <Post id={p.id} message={p.message} likes={p.likes} />);

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