import { api } from "./api"
import { IPost } from "../../types/postsTypes"
import { IResponse } from "../../types/commonTypes"

const GET_POST_URL = "/posts"
const ADD_POST = "/posts/add"
const DELETE_POST = "/posts/delete/"

export const getPosts = (userId: string) => api.get<IPost>(GET_POST_URL, { params: { userId } })
export const addPost = (post: IPost) => api.post<IResponse>(ADD_POST, { body: post })
export const deletePost = (postId: string) => api.delete<IResponse>(DELETE_POST + postId)
export const createLike = (postId: string) => api.post<IResponse>(`/posts/${ postId }/likes`)
export const removeLike = (postId: string, likeId: string) => api.delete<IResponse>(`/posts/${ postId }/likes/${ likeId }`)