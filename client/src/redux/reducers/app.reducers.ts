import {MOBILE_MODE, SET_APP_READY, SET_SIDEBAR_VISIBLE} from "../actions/types"
import {AppActionsTypes} from "../actions/app.actions"

const initialState = {
    mobileMode: false,
    sidebarVisible: true,
    appReady: false
}
type TAppState = typeof initialState

export const appReducer = (state = initialState, action: AppActionsTypes): TAppState => {
    switch (action.type) {
        case MOBILE_MODE:
            return {
                ...state,
                mobileMode: action.payload
            }
        case SET_SIDEBAR_VISIBLE:
            return {
                ...state,
                sidebarVisible: action.payload
            }
        case SET_APP_READY:
            return {
                ...state,
                appReady: action.payload
            }
        default:
            return state
    }
}