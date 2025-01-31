import React from "react";
import styles from './Posts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const Posts = React.memo(({ posts, addPost, profile }) => {

  const postElements = posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} profile={profile} />);

  const addNewPost = (value, dispatch) => {
    addPost(value.newPostBody);
    dispatch(reset("profilePostForm"));
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
})

const PostForm = ({ handleSubmit }) => {

  return (
    <form onSubmit={(e) => {
      handleSubmit(e);
      reset();
    }}
      className={styles.post_items} >
      <Field
        component={Textarea}
        name="newPostBody"
        placeholder="Add new post..."
        validate={[required, maxLengthCreator(20)]}
      />
      <div>
        <button className={styles.send_button}>Add post</button>
      </div>
    </form >
  );
}

const PostFormRedux = reduxForm({
  form: "profilePostForm"
})(PostForm);

export default Posts;