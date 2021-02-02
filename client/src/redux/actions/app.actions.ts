import {MOBILE_MODE, SET_APP_READY, SET_SIDEBAR_VISIBLE} from "./types"
import {ThunkAction} from "redux-thunk"
import {GlobalState} from "../store"
import jwtDecode from "jwt-decode"
import {logout, setCurrentUser, TSetCurrentUser} from "./auth.actions"
import {CurrentUserType} from "../../types/types"


export type AppActionsTypes = TSetMobileMode | TSetSidebarVisible | TSetAppReady

type TSetMobileMode = {
    type: typeof MOBILE_MODE
    payload: boolean
}
export const setMobileMode = (isMobile: boolean): TSetMobileMode => ({
    type: MOBILE_MODE,
    payload: isMobile
})

type TSetSidebarVisible = {
    type: typeof SET_SIDEBAR_VISIBLE
    payload: boolean
}
export const setSidebarVisible = (isVisible: boolean): TSetSidebarVisible => ({
    type: SET_SIDEBAR_VISIBLE,
    payload: isVisible
})

type TSetAppReady = {
    type: typeof SET_APP_READY
    payload: boolean
}
export const setAppReady = (isReady: boolean): TSetAppReady => ({
    type: SET_APP_READY,
    payload: isReady
})

type AppThunkCreatorType = ThunkAction<Promise<void>, GlobalState, unknown, AppActionsTypes | TSetCurrentUser>

export const initialize = (history: any): AppThunkCreatorType => async dispatch => {
    if (localStorage.access_token) {
        const {access_token} = localStorage
        const decoded: CurrentUserType = jwtDecode(access_token)
        dispatch(setCurrentUser(decoded))
        const currentTime = Date.now() / 1000
        if (decoded.exp && decoded.exp < currentTime) {
            dispatch(logout())
            history.push("/login")
        }
    } else {
        dispatch(logout())
        history.push("/login")
    }
    dispatch(setAppReady(true))
}