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
    updateProfile(profileData) {
        return api.put(`profile/edit`, profileData);
    },
    updateUserPhoto(file) {
        return api.post(`profile/edit/photo`, file, {
            headers: {"Content-Type":"multipart/form-data"}
        });
    },
    updatePassword(passwords) {
        return api.post(`profile/edit/password`, passwords);
    },
    updateStatus(status) {
        return api.post(`/profile/edit/status`, {status});
    }
};