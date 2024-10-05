const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:

            const messageId = ++(state.messages[state.messages.length - 1].id);
            const message = {
                id: messageId,
                text: state.newMessageText,
                user: {
                    id: "2",
                    icon: "https://i0.wp.com/tanhananews.com/wp-content/uploads/2021/07/Ratu-Felisha-Hak-Cipta-Instagramallaboutfelishagtr.jpg?fit=800%2C677&ssl=1",
                    isCurrentUser: true
                },
                createdAt: Date.now()
            }

            state.messages.push(message);
            state.newMessageText = '';
            console.log(`Message with id ${message.id} was successfully created.`);
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMessageText: text });

export default DialogsReducer;