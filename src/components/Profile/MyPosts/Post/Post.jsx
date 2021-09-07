import PostStyle from './Post.module.css';

const Post = () => {
  return(
    <div className={PostStyle.post__item}>
      <img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="Avatar" />
      <span className={PostStyle.message__item}>Message</span>
      <button className={PostStyle.like__btn}>❤️</button>
      <textarea></textarea>
    </div>
  );
}

export default Post;