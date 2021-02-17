import { IPost, PostsActionsTypes } from "../../types/postsTypes"
import { ADD_POST, DELETE_POST, SET_POSTS, SET_POSTS_LOADING, UPDATE_POST } from "../actions/types"

interface IPostsState {
    posts: IPost[]
    isProfileLoading: boolean
}

const initialState: IPostsState = {
    posts: [],
    isProfileLoading: false
}

export const postsReducer = (state = initialState, action: PostsActionsTypes): IPostsState => {
    switch (action.type) {
        case SET_POSTS_LOADING:
            return {
                ...state,
                isProfileLoading: action.isLoading
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.post.id ? action.post : post)
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        default:
            return state
    }
}