import {SET_PROFILE, SET_STATUS, SET_USER_PHOTO} from "../actions/types";


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
    },
    photo: null,
    posts: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload.profile,
                posts: action.payload.posts
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.payload
            }
        default:
            return state;
    }
}

export default profileReducer;