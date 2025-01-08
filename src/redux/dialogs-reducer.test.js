import dialogsReducer, { sendMessage } from "./dialogs-reducer";

const state = {
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
    ]
}

test('length of messages should be incremented', () => {
    // 1. test data
    let action = sendMessage("Test message body");
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.messages.length).toBe(4);
});