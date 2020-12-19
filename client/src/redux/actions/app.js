import {IS_MOBILE, SHOW_SIDEBAR} from "./types";

export const setIsMobile = isMobile => ({
    type: IS_MOBILE,
    payload: isMobile
});

export const setShowSidebar = showSidebar => ({
    type: SHOW_SIDEBAR,
    payload: showSidebar
});
