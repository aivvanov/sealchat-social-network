import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/store";

const Dialogs = (props) => {
    const dialogElements = props.store.getState().dialogsPage.dialogs
        .map(dialog => <Dialog id={dialog.id} userName={dialog.name} userImage={dialog.icon} />);

    const messageElements = props.store.getState().dialogsPage.messages
        .map(message => <Message messageText={message.text} messageCreatedAt={message.createdAt} messageUserInfo={message.user} />);

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.store.dispatch(updateMessageTextActionCreator(text));
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
                    value={props.store.getState().dialogsPage.newMessageText}
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