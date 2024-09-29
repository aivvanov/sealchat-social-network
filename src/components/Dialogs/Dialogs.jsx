import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogElements = props.state.dialogs
        .map(dialog => <Dialog id={dialog.id} userName={dialog.name} userImage={dialog.icon} />);

    const messageElements = props.state.messages
        .map(message => <Message messageText={message.text} messageCreatedAt={message.createdAt} messageUserInfo={message.user} />);

    const sendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateMessageText(text);
    }

    const newMessageElement = React.createRef();

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {dialogElements}
            </div>
            <div className={styles.separator}></div>
            <div className={styles.messages}>
                {messageElements}
            </div>
            <div className={styles.message_input_container}>
                <textarea
                    placeholder="Text message..."
                    className={styles.message_input}
                    ref={newMessageElement}
                    value={props.state.newMessageText}
                    onChange={onMessageChange}
                />
                <button
                    className={styles.send_button}
                    onClick={sendMessage}
                >
                    Отправить
                </button>
            </div>
        </div>
    )
}

export { Dialogs }