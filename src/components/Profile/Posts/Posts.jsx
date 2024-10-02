import React from "react";
import styles from './Posts.module.css';
import { Post } from "./Post/Post";


const Posts = (props) => {

  const postElements = props.posts.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />);

  const newPostElement = React.createRef();

  const createNewPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-POST-TEXT', newPostText: text });
  }

  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div className={styles.post_items}>
        <textarea placeholder="Add new post..." onChange={onPostChange} value={props.posts.newPostText} ref={newPostElement} />
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