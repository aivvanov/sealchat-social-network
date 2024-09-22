import React from "react";
import styles from './Posts.module.css';
import { Post } from "./Post/Post";


const Posts = (props) => {

  const postElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />);

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <div className={styles.post_button}>
          <button>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
}

export { Posts }