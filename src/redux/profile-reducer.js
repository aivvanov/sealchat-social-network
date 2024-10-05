const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const ProfileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            const postId = ++(state.posts[0].id);
            const message = {
                id: postId,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.unshift(message);
            state.newPostText = '';
            console.log(`Post with id ${message.id} was successfully created.`);
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newPostText: text });

export default ProfileReducer;
