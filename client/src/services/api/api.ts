import axios from "axios"
import { ACCESS_TOKEN } from "../../constants"

export const api = axios.create({
    baseURL: "/api/v1/",
    headers: {
        "Content-Type": "application/JSON"
    }
})

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem(ACCESS_TOKEN)
    // const { access_token } = localStorage
    config.headers.Authorization = token ? `Bearer ${token}` : ""
    return config
})
