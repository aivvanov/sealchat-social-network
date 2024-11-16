import { authAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const GET_USER_PROFILE = 'GET-USER-PROFILE';
const SET_STATUS = "SET-STATUS";

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
    profile: null,
    status: ""
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
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updatePostText = (text) => ({ type: UPDATE_POST_TEXT, newPostText: text });
export const getUserProfileSuccess = (profile) => ({ type: GET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => {
    return (dispatch) => {
        if (!userId) {
            authAPI.auth()
                .then(response => {
                    if (response.resultCode === 0) {
                        userId = response.data.id;
                        return profileAPI.getStatus(userId);
                    }
                })
                .then(response => {
                    if (response) {
                        dispatch(setStatus(response.data));
                    }
                })
                .catch(error => {
                    console.error("Ошибка при запросе статуса пользователя", error);
                });
        } else {
            profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
        }
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            authAPI.auth()
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
