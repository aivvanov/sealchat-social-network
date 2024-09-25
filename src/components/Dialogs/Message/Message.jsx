import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {

  const newMassageElement = React.createRef();
  const date = new Date(props.messages.createdAt);
  const formattedDate = isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();

  const sendMessage = () => {
    const text = newMassageElement.current.value;
    alert(text);
  }

  // TODO: вынести в отдельную компоненту, в props передать флаг isMessageCurrentUser и вытащить его в компоненте
  const messages = props.messages
    .map(message => {
      return message.isMessageCurrentUser ? (
        <div className={styles.current_user_message}>
          <div className={styles.message_content}>
            <p>{message.text}</p>
            <span>{formattedDate}</span>
          </div>
          <img src={message.user.icon} alt="userImage" />
        </div>
      ) : (
        <div className={styles.user_message}>
          <img src={message.user.icon} alt="userImage" />
          <div className={styles.message_content}>
            <p>{message.text}</p>
            <span>{formattedDate}</span>
          </div>
        </div>
      );
    });

  return (
    <div>
      {messages}
      <div className={styles.message_form}>
        <textarea
          placeholder="Напишите ваше сообщение..."
          className={styles.message_input}
          ref={newMassageElement}
        />
        <button
          className={styles.send_button}
          onClick={sendMessage}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};


export default Message
