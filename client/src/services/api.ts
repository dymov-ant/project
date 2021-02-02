import axios from "axios"
import {
    LoginDataType,
    PostType,
    ProfileType,
    RegisterDataType,
    UpdatePasswordDataType,
    UpdateProfileType
} from "../types/types";

const api = axios.create({
    baseURL: "http://react-project.ru/api/v1/",
    headers: {
        "Content-Type": "application/JSON"
    }
})

api.interceptors.request.use(function (config) {
    const {access_token} = localStorage;
    config.headers.Authorization = access_token ? `Bearer ${access_token}` : "";
    return config;
});


type LoginResponseType = {
    token: string
    message?: string
}
type PostResponseType = {
    post: PostType
    message?: string
}
type MessageResponseType = {
    message: string
    errors?: Array<string>
}

export const authAPI = {
    login(userData: LoginDataType) {
        return api.post<LoginResponseType>("auth/login", userData)
    },
    register(userData: RegisterDataType) {
        return api.post<MessageResponseType>("auth/register", userData)
    }
}

export const profileAPI = {
    getProfile(id: string) {
        return api.get<ProfileType>("profile", {params: {id}})
    },
    updateProfile(profileData: UpdateProfileType) {
        return api.put<MessageResponseType>(`profile/edit`, profileData)
    },
    // todo Типизировать file
    updateUserPhoto(file: any) {
        return api.post<MessageResponseType>(`profile/edit/photo`, file, {
            headers: {"Content-Type":"multipart/form-data"}
        })
    },
    updatePassword(passwords: UpdatePasswordDataType) {
        return api.post<MessageResponseType>(`profile/edit/password`, passwords)
    },
    updateStatus(status: string) {
        return api.post<MessageResponseType>(`/profile/edit/status`, {status})
    }
}

export const postsAPI = {
    getPosts(userId: string) {
        return api.get<Array<PostType>>("/posts", {params: {userId}})
    },
    addPost(post: PostType) {
        return api.post<PostResponseType>("/posts/add", {body: post})
    },
    deletePost(postId: string) {
        return api.delete<MessageResponseType>("/posts/delete/" + postId)
    },
    createLike(postId: string) {
        return api.post<PostResponseType>(`/posts/${postId}/likes`)
    },
    removeLike(postId: string, likeId: string) {
        return api.delete<PostResponseType>(`/posts/${postId}/likes/${likeId}`)
    }
}