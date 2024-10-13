const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {
            id: "1",
            name: "Xander Ivanov",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s"
        },
        {
            id: "2",
            name: "Tara Basro",
            icon: "https://cdn1-production-images-kly.akamaized.net/xO8KZWeoffVVctm4WuQL6eoFt20=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1948948/original/042673800_1519880576-FOTO_1.jpg"
        },
        {
            id: "3",
            name: "Daniel Adnan",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvongFeVghuPM8EkKOenRpSDxn8ffL48Xkg&s"
        },
        {
            id: "4",
            name: "Mia Goth",
            icon: "https://ntvb.tmsimg.com/assets/assets/754303_v9_bc.jpg"
        },
        {
            id: "5",
            name: "Lily Collins",
            icon: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/552822_v9_bc.jpg"
        }
    ],
    messages: [
        {
            id: "1",
            text: "Hello! How are you?",
            user: {
                id: "1",
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s",
                isCurrentUser: false
            },
            createdAt: 1694860800000
        },
        {
            id: "2",
            text: "Miss you, babz <3",
            user: {
                id: "1",
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s",
                isCurrentUser: false
            },
            createdAt: 1694860800000
        },
        {
            id: "3",
            text: "Gonna programming now! Bye.",
            user: {
                id: "2",
                icon: "https://i0.wp.com/tanhananews.com/wp-content/uploads/2021/07/Ratu-Felisha-Hak-Cipta-Instagramallaboutfelishagtr.jpg?fit=800%2C677&ssl=1",
                isCurrentUser: true
            },
            createdAt: 1694860800000
        }
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

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
            };

            console.log(`Message with id ${message.id} was successfully created.`);

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, message]
            };
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        default:
            return state;
    }
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export const updateMessageTextAC = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMessageText: text });

export default dialogsReducer;