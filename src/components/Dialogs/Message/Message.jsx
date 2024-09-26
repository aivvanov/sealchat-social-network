import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {

  const date = new Date(props.messageCreatedAt);
  const formattedDate = isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();

  return (
    <div>
      <div className={props.messageUserInfo.isCurrentUser ? styles.current_user_message : styles.user_message}>
        {props.messageUserInfo.isCurrentUser ? "" : <img src={props.messageUserInfo.icon} alt="userImage" />}
        <div className={styles.message_content}>
          <p>{props.messageText}</p>
          <span>{formattedDate}</span>
        </div>
        {props.messageUserInfo.isCurrentUser ? <img src={props.messageUserInfo.icon} alt="userImage" /> : ""}
      </div>
    </div>
  );
};


export default Message
