import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogElements = props.state.dialogs
        .map(dialog => <Dialog id={dialog.id} userName={dialog.name} userImage={dialog.icon} />);

    const messageElements = props.state.messages
        .map(message => {

            const date = new Date(message.user.createdAt);
            const formattedDate = isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();

            return <Message messageText={message.text} messageUserImage={message.user.icon} messageDate={formattedDate} isMessageCurrentUser={message.user.isCurrentUser} />
        });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {dialogElements}
            </div>
            <div className={styles.separator}></div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export { Dialogs }