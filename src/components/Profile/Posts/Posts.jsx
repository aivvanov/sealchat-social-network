import React from "react";
import styles from './Posts.module.css';
import { Post } from "./Post/Post";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/profile-reducer"


const Posts = (props) => {
  
  const postElements = props.state.profilePage.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />);

  const newPostElement = React.createRef();

  const createNewPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    props.dispatch(updatePostTextActionCreator(text));
  }

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div className={styles.post_items}>
        <textarea placeholder="Add new post..." onChange={onPostChange} value={props.state.profilePage.newPostText} ref={newPostElement} />
        <div>
          <button onClick={createNewPost}>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export { Posts }