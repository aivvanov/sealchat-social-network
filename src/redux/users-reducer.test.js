import usersReducer, { followSuccess, setCurrentPage, setCurrentSearchText, setTotalCount, setUsers, unfollowSuccess } from "./users-reducer";

const state = {
    users: [
        { id: 1, name: "User1", followed: false },
        { id: 2, name: "User2", followed: false },
        { id: 3, name: "User3", followed: true }
    ],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    currentSearchText: "",
    isFetching: false,
    followingInProgress: []
}

it('user should be followed', () => {
    // 1. test data
    let action = followSuccess(2);
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    const followedUser = newState.users.find(user => user.id === 2);
    expect(followedUser.followed).toBe(true);
});

it('user should be unfollowed', () => {
    // 1. test data
    let action = unfollowSuccess(3);
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    const unfollowedUser = newState.users.find(user => user.id === 3);
    expect(unfollowedUser.followed).toBe(false);
});

it('users list length should be equal to 1', () => {
    // 1. test data
    let action = setUsers([{ id: 456, name: "NewUser1", followed: false }]);
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.users.length).toBe(1);
});

it('current page shold be equal to 10', () => {
    // 1. test data
    let action = setCurrentPage(10);
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.currentPage).toBe(10);
});

it(`current search text should be equal to 'Test search text'`, () => {
    // 1. test data
    let action = setCurrentSearchText('Test search text');
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.currentSearchText).toBe('Test search text');
});

it('users total count should be equal to 30', () => {
    // 1. test data
    let action = setTotalCount(30);
    // 2. action
    let newState = usersReducer(state, action);
    // 3. expectation
    expect(newState.totalUsersCount).toBe(30);
});