import {
    IAddPost,
    IDeletePost,
    IPost,
    ISetPosts,
    ISetPostsLoading,
    IUpdatePost,
    PostsActionsTypes
} from "../../types/postsTypes"
import { ADD_POST, DELETE_POST, SET_POSTS, SET_POSTS_LOADING, UPDATE_POST } from "./types"
import { ThunkAction } from "redux-thunk"
import { GlobalState } from "../store"
import postsAPI from "../../services/api/postsAPI"
import { setMessage } from "./app"

type PostsThunkType = ThunkAction<Promise<void>, GlobalState, unknown, PostsActionsTypes>

const setPostsLoading = (isLoading: boolean): ISetPostsLoading => ({
    type: SET_POSTS_LOADING,
    isLoading
})

const setPosts = (posts: IPost[]): ISetPosts => ({
    type: SET_POSTS,
    posts
})

const addPost = (post: IPost): IAddPost => ({
    type: ADD_POST,
    post
})

const updatePost = (post: IPost): IUpdatePost => ({
    type: UPDATE_POST,
    post
})

const deletePost = (postId: string): IDeletePost => ({
    type: DELETE_POST,
    postId
})

export const getPosts = (userId: string): PostsThunkType => async dispatch => {
    try {
        dispatch(setPostsLoading(true))
        const response = await postsAPI.getPosts(userId)
        dispatch(setPosts(response.data))
        dispatch(setPostsLoading(false))
    } catch (e) {
        const response = e.response
        if (response.data.message) {
            dispatch(setMessage({ type: "error", body: "response.data.message" }))
        }
        dispatch(setPostsLoading(false))
    }
}

export const createPost = (post: IPost): PostsThunkType => async dispatch => {
    try {
        dispatch(setPostsLoading(true))
        const response = await postsAPI.addPost(post)
        if (response.status === 201) {
            dispatch(addPost(response.data.post))
        }
        dispatch(setPostsLoading(false))
    } catch (e) {
        const response = e.response
        if (response.data.message) {
            dispatch(setMessage({ type: "error", body: response.data.message }))
        }
        dispatch(setPostsLoading(false))
    }
}

export const removePost = (postId: string): PostsThunkType => async dispatch => {
    try {
        dispatch(setPostsLoading(true))
        const response = await postsAPI.deletePost(postId)
        if (response.status === 200) {
            dispatch(deletePost(postId))
            dispatch(setMessage({ type: "success", body: "Пост удален!" }))
        }
        dispatch(setPostsLoading(false))
    } catch (e) {
        const response = e.response
        if (response.data.message) {
            dispatch(setMessage({ type: "error", body: response.data.message }))
        }
        dispatch(setPostsLoading(false))
    }
}

export const createLike = (postId: string): PostsThunkType => async dispatch => {
    try {
        dispatch(setPostsLoading(true))
        const response = await postsAPI.createLike(postId)
        if (response.status === 200) {
            dispatch(updatePost(response.data.post))
        }
        dispatch(setPostsLoading(false))
    } catch (e) {
        const response = e.response
        if (response.data.message) {
            dispatch(setMessage({ type: "error", body: response.data.message }))
        }
        dispatch(setPostsLoading(false))
    }
}

export const removeLike = (postId: string, likeId: string): PostsThunkType => async dispatch => {
    try {
        dispatch(setPostsLoading(true))
        const response = await postsAPI.removeLike(postId, likeId)
        if (response.status === 200) {
            dispatch(updatePost(response.data.post))
        }
        dispatch(setPostsLoading(false))
    } catch (e) {
        const response = e.response
        if (response.data.message) {
            dispatch(setMessage({ type: "error", body: response.data.message }))
        }
        dispatch(setPostsLoading(false))
    }
}