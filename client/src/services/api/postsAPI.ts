import {api} from "./api"
import {IPost} from "../../types/postsTypes"
import {IResponse} from "../../types/commonTypes"

const GET_POST_URL = "/posts"
const ADD_POST_URL = "/posts/add"
const DELETE_POST_URL = "/posts/delete/"

interface IPostsResponse {
    posts: IPost[]
    message?: string
}

interface IPostResponse {
    post: IPost
    message?: string
}

const getPosts = (userId: string) => api.get<IPostsResponse>(GET_POST_URL, {params: {userId}})
const addPost = (body: string) => api.post<IPostResponse>(ADD_POST_URL, {body})
const deletePost = (postId: string) => api.delete<IResponse>(DELETE_POST_URL + postId)
const createLike = (postId: string) => api.post<IPostResponse>(`/posts/${postId}/likes`)
const removeLike = (postId: string, likeId: string) => api.delete<IPostResponse>(`/posts/${postId}/likes/${likeId}`)

const postAPI = {getPosts, addPost, deletePost, createLike, removeLike}
export default postAPI