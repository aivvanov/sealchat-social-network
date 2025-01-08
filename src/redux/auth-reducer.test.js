import authReducer, { setAuthUserData } from "./auth-reducer";

const state = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

test(`state user's data should be equal to input user's object`, () => {
    // 1. test data
    const testUser = { userId: 123, login: "testUser", email: "example@gmail.com", isAuth: true };
    const { userId, login, email, isAuth } = testUser;
    let action = setAuthUserData(userId, login, email, isAuth);
    // 2. action
    let newState = authReducer(state, action);
    // 3. expectation
    expect(newState).toEqual(testUser);
});