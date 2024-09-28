import React from "react";
import styles from './Profile.module.css';
import { Posts } from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <Posts posts={props.state.posts} addPost={props.addPost} updatePostText={props.updatePostText} newPostText={props.state.newPostText} />
    </div>
  );
}

export { Profile }