import React from "react";
import styles from './Posts.module.css';
import { Post } from "./Post/Post";
import { posts } from '../../../index';


const Posts = () => {

  const postElements = posts
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