import axios from "axios"
import {ILoginData, IPost, IRegisterData} from "../types/types"

const api = axios.create({
    baseURL: "/api/v1/",
    headers: {
        "Content-Type": "application/JSON"
    }
})

api.interceptors.request.use(function (config) {
    const {access_token} = localStorage
    config.headers.Authorization = access_token ? `Bearer ${access_token}` : ""
    return config
})

interface IResponse {
    message?: string
    errors?: string[]
}

interface ILoginResponse extends IResponse {
    token: string
}

interface IPostResponse extends IResponse {
    post: IPost
}

export const authAPI = {
    login(userData: ILoginData) {
        return api.post<ILoginResponse>("auth/login", userData)
    },
    register(userData: IRegisterData) {
        return api.post<IResponse>("auth/register", userData)
    }
}

export const postsAPI = {
    getPosts(userId: string) {
        return api.get<IPost[]>("/posts", {params: {userId}})
    },
    addPost(post: IPost) {
        return api.post<IResponse>("/posts/add", {body: post})
    },
    deletePost(postId: string) {
        return api.delete<IResponse>("/posts/delete/" + postId)
    },
    createLike(postId: string) {
        return api.post<IResponse>(`/posts/${postId}/likes`)
    },
    removeLike(postId: string, likeId: string) {
        return api.delete<IPostResponse>(`/posts/${postId}/likes/${likeId}`)
    }
}