const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
    posts: [
        {
            id: 2,
            message: "Hello!! how are you guys doing?",
            likesCount: 10
        },
        {
            id: 1,
            message: "Just created my new post here!",
            likesCount: 23
        }
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const postId = ++(state.posts[0].id);
            const message = {
                id: postId,
                message: state.newPostText,
                likesCount: 0
            };

            console.log(`Post with id ${message.id} was successfully created.`);

            return {
                ...state,
                posts: [message, ...state.posts],
                newPostText: ''
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (text) => ({ type: UPDATE_POST_TEXT, newPostText: text });

export default profileReducer;
