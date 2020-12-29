import {IS_MOBILE, SET_LOADING, SET_MESSAGE, SHOW_SIDEBAR} from "./types";

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

export const setMessage = message => ({
   type: SET_MESSAGE,
   payload: message
});