import {PostType} from "../../types/types";
import {PostsActionsTypes} from "../actions/posts.actions";
import {ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST} from "../actions/types";

type TPostsState = {
    posts: Array<PostType>
}
const initialState: TPostsState = {
    posts: []
}

export const postsReducer = (state = initialState, action: PostsActionsTypes): TPostsState => {
    switch (action.type) {
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