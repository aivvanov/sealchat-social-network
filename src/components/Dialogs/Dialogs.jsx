import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogElements = props.state.dialogs
        .map(dialog => <Dialog id={dialog.id} userName={dialog.name} userImage={dialog.icon} />);

    const messageElements = props.state.messages
        .map(message => <Message messageText={message.text} messageCreatedAt={message.createdAt} messageUserInfo={message.user} />);

    const newMassageElement = React.createRef();

    const sendMessage = () => {
        const text = newMassageElement.current.value;
        alert(text);
    }

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
    )
}

export { Dialogs }