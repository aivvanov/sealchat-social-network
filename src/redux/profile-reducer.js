import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const GET_USER_PROFILE = 'GET-USER-PROFILE';

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
    newPostText: "",
    profile: null
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
        case GET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updatePostText = (text) => ({ type: UPDATE_POST_TEXT, newPostText: text });
export const getUserProfileSuccess = (profile) => ({ type: GET_USER_PROFILE, profile });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            profileAPI.auth()
                .then(data => {
                    if (data.resultCode === 0) {
                        userId = data.data.id;
                        return profileAPI.getProfile(userId);
                    }
                })
                .then(data => {
                    if (data) {
                        dispatch(getUserProfileSuccess(data));
                    }
                })
                .catch(error => {
                    console.error("Ошибка при запросе профиля", error);
                });
        } else {
            profileAPI.getProfile(userId)
                .then(data => {
                    dispatch(getUserProfileSuccess(data));
                })
                .catch(error => {
                    console.error("Ошибка при запросе профиля", error);
                });
        }
    }
}

export default profileReducer;
