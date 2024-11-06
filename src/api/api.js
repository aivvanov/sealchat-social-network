import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance
            .get(`users?page=${currentPage ? currentPage : 1}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getSearchedUsers(currentPage = 1, pageSize, userSearchText) {
        return instance
            .get(`users?page=${currentPage ? currentPage : 1}&count=${pageSize}&term=${userSearchText}`)
            .then(response => {
                return response.data;
            })
    },
    searchUsers(userSearchText, pageSize) {
        return instance
            .get(`users?term=${userSearchText}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })

    }
};

export const profileAPI = {
    auth() {
        return instance
            .get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    }
};
