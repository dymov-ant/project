import {SET_PROFILE} from "../actions/types";


const initialState = {
    profile: {
        _id: null,
        email: null,
        name: null,
        birthDate: null,
        photo: null,
        status: null,
        city: null,
        maritalStatus: null,
        education: null,
        job: null,
        posts: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state;
    }
}