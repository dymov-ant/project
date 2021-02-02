import {ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST} from "./types"
import {PostType} from "../../types/types"

export type PostsActionsTypes = TSetPost | TAddPost | TUpdatePost | TDeletePost

type TSetPost = {
    type: typeof SET_POSTS
    posts: Array<PostType>
}
export const setPosts = (posts: Array<PostType>): TSetPost => ({
    type: SET_POSTS,
    posts
})

type TAddPost = {
    type: typeof ADD_POST
    post: PostType
}
export const addPost = (post: PostType): TAddPost => ({
    type: ADD_POST,
    post
})

type TUpdatePost = {
    type: typeof UPDATE_POST
    post: PostType
}
export const updatePost = (post: PostType): TUpdatePost => ({
    type: UPDATE_POST,
    post
})

type TDeletePost = {
    type: typeof DELETE_POST
    postId: string
}
export const deletePost = (postId: string): TDeletePost => ({
    type: DELETE_POST,
    postId
})