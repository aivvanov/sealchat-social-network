const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        {
            id: "1",
            fullName: "Xander Ivanov",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s",
            location: {
                id: 1,
                city: "Moscow",
                country: "Russia"
            },
            isFollowed: true,
            statusText: "Hello! How you guys doing here?"

        },
        {
            id: "2",
            fullName: "Tara Basro",
            photoUrl: "https://cdn1-production-images-kly.akamaized.net/xO8KZWeoffVVctm4WuQL6eoFt20=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1948948/original/042673800_1519880576-FOTO_1.jpg",
            location: {
                id: 1,
                city: "New-York",
                country: "USA"
            },
            isFollowed: false,
            statusText: "I`m here!!!!"
        },
        {
            id: "3",
            fullName: "Daniel Adnan",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvongFeVghuPM8EkKOenRpSDxn8ffL48Xkg&s",
            location: {
                id: 1,
                city: "London",
                country: "England UK"
            },
            isFollowed: true,
            statusText: "hey hey hey!"
        },
        {
            id: "4",
            fullName: "Mia Goth",
            photoUrl: "https://ntvb.tmsimg.com/assets/assets/754303_v9_bc.jpg",
            location: {
                id: 1,
                city: "Moscow",
                country: "Russia"
            },
            isFollowed: false,
            statusText: "Idk what to do"
        },
        {
            id: "5",
            fullName: "Lily Collins",
            photoUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/552822_v9_bc.jpg",
            location: {
                id: 1,
                city: "Chicago",
                country: "USA"
            },
            isFollowed: false,
            statusText: "Just wanna talk with someone :("
        }
    ]
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
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;