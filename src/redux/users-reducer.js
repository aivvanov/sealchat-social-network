import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'sealchat/users/FOLLOW';
const UNFOLLOW = 'sealchat/users/UNFOLLOW';
const SET_USERS = "sealchat/users/SET-USERS";
const SET_CURRENT_PAGE = "sealchat/users/SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "sealchat/users/SET-TOTAL-COUNT";
const SET_CURRENT_SEARCH_TEXT = "sealchat/users/SET-CURRENT-SEARCH-TEXT";
const SEARCH_USERS = "sealchat/users/SEARCH-USERS";
const TOGGLE_IS_FETCHING = "sealchat/users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "sealchat/users/TOGGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    currentSearchText: "",
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.count }
        case SET_CURRENT_SEARCH_TEXT:
            return { ...state, currentSearchText: action.text }
        case SEARCH_USERS:
            return { ...state }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const setCurrentSearchText = (text) => ({ type: SET_CURRENT_SEARCH_TEXT, text });
export const searchUsersSuccess = () => ({ type: SEARCH_USERS });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
}


export const changePage = (page, pageSize, userSearchText) => async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getSearchedUsers(page, pageSize, userSearchText);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
}

export const searchUsers = (currentSearchText, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.searchUsers(currentSearchText, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(searchUsersSuccess());
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess);
}

export default usersReducer;