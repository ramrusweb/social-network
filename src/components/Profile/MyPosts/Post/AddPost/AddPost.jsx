import AddPostStyle from './AddPost.module.css';

const AddPost = () => {
    return(
        <div className={AddPostStyle.addpost}>
            <textarea></textarea>
            <br></br>
            <button>Add post</button>
        </div>
    );
}

export default AddPost;
