import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { dialogs, messages } from "../../index";

const Dialogs = () => {

    const dialogElements = dialogs
        .map(dialog => <Dialog id={dialog.id} userName={dialog.name} />);

    const messageElements = messages
        .map(message => <Message messageText={message.text} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export { Dialogs }