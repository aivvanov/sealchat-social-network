import profileReducer, { addPost, deletePost } from "./profile-reducer";

const state = {
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
    ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost("Test post message");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of post should be correct', () => {
    // 1. test data
    let action = addPost("Test post message");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[0].message).toBe("Test post message");
});

test('After deleting length of post should be decremented', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

test(`After deleting post with incorrect id, post length should't be decremented`, () => {
    // 1. test data
    let action = deletePost(12345);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});