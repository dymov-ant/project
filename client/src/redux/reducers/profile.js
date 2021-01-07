import {SET_PROFILE, SET_STATUS} from "../actions/types";


const initialState = {
    profile: {
        email: null,
        name: null,
        birthDate: null,
        status: null,
        city: null,
        maritalStatus: null,
        education: null,
        job: null,
        photo: null
    },
    photo: null,
    posts: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        // case SET_POSTS:
        //     return {
        //         ...state,
        //         posts: action.payload
        //     }
        // case ADD_POST:
        //     return {
        //         ...state,
        //         posts: [action.payload, ...state.posts]
        //     }
        // case UPDATE_POSTS:
        //     return {
        //         ...state,
        //         posts: state.posts.map(p => p._id === action.payload._id ? action.payload : p)
        //     }
        // case DELETE_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.filter(post => post._id !== action.payload)
        //     }
        default:
            return state;
    }
};