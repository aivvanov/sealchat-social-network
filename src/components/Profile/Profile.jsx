import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import { Navigate } from "react-router-dom";

const Profile = (props) => {

  if (!props.isAuth) return <Navigate to='/login' />;

  return (
    <div className={styles.content}>
      <ProfileInfo profile = {props.profile} />
      <PostsContainer />
    </div>
  );
}

export default Profile;