import React from "react";
import styles from "./Message.module.css";

const Message = ({ messageCreatedAt, messageUserInfo, messageText, profile }) => {

  const date = new Date(messageCreatedAt);
  const formattedDate = isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();

  return (
    <div>
      <div className={messageUserInfo.isCurrentUser ? styles.current_user_message : styles.user_message}>
        {messageUserInfo.isCurrentUser ? "" : <img src={messageUserInfo.icon} alt="userImage" />}
        <div className={styles.message_content}>
          <p>{messageText}</p>
          <span>{formattedDate}</span>
        </div>
        {messageUserInfo.isCurrentUser ? <img src={profile.photos.small} alt="userImage" /> : ""}
      </div>
    </div>
  );
};


export default Message;
