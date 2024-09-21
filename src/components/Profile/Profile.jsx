import React from "react";
import styles from './Profile.module.css';
import { Posts } from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <Posts />
    </div>
  );
}

export { Profile }