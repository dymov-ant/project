import { IProfile } from "./profileTypes"
import { ADD_POST, DELETE_POST, SET_POSTS, SET_POSTS_LOADING, UPDATE_POST } from "../redux/actions/types"
import { ISetMessage } from "./appTypes"

interface ILike {
    _id: string
    user: string
    createdDate: string
}

export interface IPost {
    _id: string
    body: string
    createdDate: string
    user: IProfile
    likes: ILike[]
}

export interface ISetPostsLoading {
    type: typeof SET_POSTS_LOADING
    isLoading: boolean
}

export interface ISetPosts {
    type: typeof SET_POSTS
    posts: IPost[]
}

export interface IAddPost {
    type: typeof ADD_POST
    post: IPost
}

export interface IUpdatePost {
    type: typeof UPDATE_POST
    post: IPost
}

export interface IDeletePost {
    type: typeof DELETE_POST
    postId: string
}

export type PostsActionsTypes = ISetPostsLoading | ISetPosts | IAddPost | IUpdatePost | IDeletePost | ISetMessage