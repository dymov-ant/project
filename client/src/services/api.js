import axios from "axios";

// const token = localStorage.getItem("access_token");

const api = axios.create({
    baseURL: "/api/v1/",
    headers: {
        // "Authorization": "Bearer " + token,
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
        return api.get("profile", {
            params: {
                id
            }
        });
    }
}