import {IS_MOBILE, SHOW_SIDEBAR} from "../actions/types";

const initialState = {
    isMobile: false,
    showSidebar: true
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
        default:
            return state;
    }
}