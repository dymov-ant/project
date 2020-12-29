import {SET_CURRENT_USER, SET_ERRORS} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {},
    errors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: Object.keys(action.payload).length !== 0,
                user: action.payload
            }
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}