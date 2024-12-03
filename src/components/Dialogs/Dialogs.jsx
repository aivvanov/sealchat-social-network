import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Dialogs = (props) => {
    const dialogElements = props.dialogs
        .map(dialog => <Dialog id={dialog.id} userName={dialog.name} userImage={dialog.icon} key={dialog.id} />);

    const messageElements = props.messages
        .map(message => <Message messageText={message.text} messageCreatedAt={message.createdAt} messageUserInfo={message.user} key={message.id} />);

    const addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
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
            <MessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.message_field}>
            <Field
                component={Textarea}
                name="newMessageBody"
                placeholder="Text message..."
                className={styles.message_input}
                validate={[required, maxLengthCreator(50)]}
            />
            <div className={styles.button_container}>
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

const MessageFormRedux = reduxForm({
    form: "dialogMessageForm"
})(MessageForm);

export default Dialogs;