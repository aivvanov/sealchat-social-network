const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_CURRENT_SEARCH_TEXT = "SET-CURRENT-SEARCH-TEXT";
const SEARCH_USERS = "SEARCH-USERS";

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    currentSearchText: ""
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isFollowed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isFollowed: false }
                    }
                    return user;
                })
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
            return { ...state, currentSearchText: "" }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, count });
export const setCurrentSearchTextAC = (text) => ({ type: SET_CURRENT_SEARCH_TEXT, text });
export const searchUsersAC = () => ({ type: SEARCH_USERS });

export default usersReducer;