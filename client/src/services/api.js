import axios from "axios";

const api = axios.create({
    baseURL: "/api/v1/",
    headers: {
        "Content-Type": "application/JSON"
    }
});

api.interceptors.request.use(function (config) {
    const {access_token} = localStorage;
    config.headers.Authorization = access_token ? `Bearer ${access_token}` : "";
    return config;
});

export const authAPI = {
    register(userData) {
        return api.post("auth/register", userData);
    },
    login(userData) {
        return api.post("auth/login", userData);
    }
};

export const profileAPI = {
    getProfile(id) {
        return api.get("profile", {params: {id}});
    },
    updateProfile(userId, profileData) {
        return api.put(`profile/${userId}/edit`, profileData);
    },
    updateUserPhoto(file, userId) {
        return api.post(`profile/${userId}/edit/photo`, file, {
            headers: {"Content-Type":"multipart/form-data"}
        });
    },
    updatePassword(passwords, userId) {
        return api.post(`profile/${userId}/edit/password`, passwords);
    },
    updateStatus(status, userId) {
        return api.post(`/profile/${userId}/edit/status`, {status});
    }
};