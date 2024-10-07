import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <PostsContainer
        store={props.store}
        state={props.state}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export { Profile }