import React from "react";
import styles from './Posts.module.css';
import { Post } from "./Post/Post";


const Posts = (props) => {

  const postElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />);

    const newPostElement = React.createRef();

    const createNewPost = () => {
        const text = newPostElement.current.value;
         alert(text);
    }

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div className={styles.post_button}>
          <button onClick={ createNewPost }>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
}

export { Posts }