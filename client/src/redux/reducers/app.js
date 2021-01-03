import {
    IS_MOBILE,
    SHOW_SIDEBAR,
    SET_LOADING,
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION, SET_NOT_FOUND
} from "../actions/types";

const initialState = {
    isMobile: false,
    showSidebar: true,
    loading: false,
    error: false,
    notifications: [],
    message: "",
    notFound: false
};

const appReducer = (state = initialState, action) => {
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
        case ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            }
        case DELETE_NOTIFICATION:
            const index = state.notifications.findIndex(item => item.id === action.payload);
            return {
                ...state,
                notifications: [
                    ...state.notifications.slice(0, index),
                    ...state.notifications.slice(index + 1)
                ]
            }
        case SET_NOT_FOUND:
            return {
                ...state,
                notFound: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;