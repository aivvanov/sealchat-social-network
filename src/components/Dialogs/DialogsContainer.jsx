import React from "react";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext>
        {
            store => {
                const sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                const changeMessageText = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text));
                }

                return <Dialogs
                    dialogs={store.getState().dialogsPage.dialogs}
                    messages={store.getState().dialogsPage.messages}
                    sendMessage={sendMessage}
                    changeMessageText={changeMessageText}
                    newMessageText={store.getState().dialogsPage.newMessageText}
                />
            }
        }
    </StoreContext>
}

export default DialogsContainer;