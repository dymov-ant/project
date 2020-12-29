import {IS_MOBILE, SHOW_SIDEBAR, SET_LOADING, SET_MESSAGE} from "../actions/types";

const initialState = {
    isMobile: false,
    showSidebar: true,
    loading: false,
    message: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case IS_MOBILE:
            return {
                ...state,
                isMobile: action.payload
            }
        case SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}