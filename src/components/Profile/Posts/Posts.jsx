import React from "react";
import styles from './Posts.module.css';
import { Post } from "./Post/Post";

const Posts = (props) => {

  const postElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

  const newPostElement = React.createRef();

  const onNewPost = () => {
    props.createNewPost();
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    props.changePostText(text);
  }

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div className={styles.post_items}>
        <textarea placeholder="Add new post..." onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
        <div>
          <button onClick={onNewPost}>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export { Posts }