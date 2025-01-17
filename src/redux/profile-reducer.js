import { authAPI, profileAPI } from "../api/api";

const ADD_POST = 'sealchat/profile/ADD-POST';
const GET_USER_PROFILE = 'sealchat/profile/GET-USER-PROFILE';
const SET_STATUS = "sealchat/profile/SET-STATUS";
const DELETE_POST = "sealchat/profile/DELETE-POST";
const SAVE_PHOTO_SUCCESS = "sealchat/profile/SAVE-PHOTO-SUCCESS";

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
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const postId = (state.posts[0].id) + 1;
            const post = {
                id: postId,
                message: action.newPostBody,
                likesCount: 0
            };

            console.log(`Post with id ${post.id} was successfully created.`);

            return {
                ...state,
                posts: [post, ...state.posts],
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: { ...action.photos } }
            }
        default:
            return state;
    }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const getUserProfileSuccess = (profile) => ({ type: GET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

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

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
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
