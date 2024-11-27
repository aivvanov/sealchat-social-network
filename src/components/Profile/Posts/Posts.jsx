import React from "react";
import styles from './Posts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const Posts = (props) => {

  const postElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

  const addNewPost = (value) => {
    props.addPost(value.newPostBody);
  }

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <PostFormRedux onSubmit={addNewPost} />
      <div>
        {postElements}
      </div>
    </div>
  );
}

const PostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={styles.post_items}>
      <Field
        component="textarea"
        name="newPostBody"
        placeholder="Add new post..." 
      />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const PostFormRedux = reduxForm({
  form: "profilePostForm"
})(PostForm);

export default Posts;