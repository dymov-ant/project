import {ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POSTS} from "../actions/types";

const initialState = {
    posts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case UPDATE_POSTS:
            return {
                ...state,
                posts: state.posts.map(p => p._id === action.payload._id ? action.payload : p)
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        default:
            return state;
    }
};