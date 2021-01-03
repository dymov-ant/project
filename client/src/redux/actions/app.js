import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION,
    IS_MOBILE,
    SET_LOADING, SET_NOT_FOUND,
    SHOW_SIDEBAR
} from "./types";

export const setIsMobile = isMobile => ({
    type: IS_MOBILE,
    payload: isMobile
});

export const setShowSidebar = showSidebar => ({
    type: SHOW_SIDEBAR,
    payload: showSidebar
});

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
});

export const addNotification = notification => ({
    type: ADD_NOTIFICATION,
    payload: notification
});

export const deleteNotification = id => ({
    type: DELETE_NOTIFICATION,
    payload: id
});

export const setNotFound = payload => ({
    type: SET_NOT_FOUND,
    payload
});