export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getCurrentSearchText = (state) => {
    return state.usersPage.currentSearchText;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}