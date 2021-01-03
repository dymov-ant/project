import axios from "axios";

const api = axios.create({
    baseURL: "/api/v1/",
    headers: {
        "Content-Type": "application/JSON"
    }
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
            headers: {
                "Content-Type":"multipart/form-data"
            }
        });
    },
    updatePassword(passwords, userId) {
        return api.post(`profile/${userId}/edit/password`, passwords);
    }
};