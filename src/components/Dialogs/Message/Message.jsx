import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
    return (
      <div>
        {props.isMessageCurrentUser ? (
          <div className={styles.current_user_message}>
            <div className={styles.message_content}>
              <p>{props.messageText}</p>
              <span>{props.messageDate}</span>
            </div>
            <img src={props.messageUserImage} alt="userImage" />
          </div>
        ) : (
          <div className={styles.user_message}>
            <img src={props.messageUserImage} alt="userImage" />
            <div className={styles.message_content}>
              <p>{props.messageText}</p>
              <span>{props.messageDate}</span>
            </div>
          </div>
        )}
      </div>
    );
  };
  

export default Message
