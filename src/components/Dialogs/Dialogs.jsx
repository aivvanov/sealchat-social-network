import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogElements = props.dialogs
        .map(dialog => <Dialog id={dialog.id} userName={dialog.name} userImage={dialog.icon} key={dialog.id} />);

    const messageElements = props.messages
        .map(message => <Message messageText={message.text} messageCreatedAt={message.createdAt} messageUserInfo={message.user} key={message.id} />);

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.changeMessageText(text);
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
                    value={props.newMessageText}
                    onChange={onMessageChange}
                />
                <button
                    className={styles.send_button}
                    onClick={onSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default Dialogs;