import React from "react";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const changeMessageText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return <Dialogs
        dialogs={props.store.getState().dialogsPage.dialogs}
        messages={props.store.getState().dialogsPage.messages}
        sendMessage={sendMessage}
        changeMessageText={changeMessageText}
        newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
}

export default DialogsContainer;