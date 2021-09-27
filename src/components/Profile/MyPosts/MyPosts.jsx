import MyPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';
import AddPost from './Post/AddPost/AddPost';

const MyPosts = () => {

  let myPostsData = [
    {id: 1, message: "Hi, how are you?", likes: 15},
    {id: 2, message: "It's my first post", likes: 20}
  ];

  return(
    <section className={MyPostsStyle.myposts__wrapper}>
      <div className={MyPostsStyle.posts}>
        <Post id={myPostsData[0].id} message={myPostsData[0].message} likes={myPostsData[0].likes} />
        <Post id={myPostsData[1].id} message={myPostsData[1].message} likes={myPostsData[1].likes} />
        <AddPost />
      </div>
    </section>
  );
}

export default MyPosts;