import { ThunkAction } from "redux-thunk"
import { GlobalState } from "../store"
import { AppActionTypes, IMessage, ISetAppInitialized, ISetMessage } from "../../types/appTypes"
import { SET_INITIALIZED, SET_MESSAGE } from "./types"
import { ACCESS_TOKEN } from "../../constants"
import { ICurrentUser } from "../../types/authTypes"
import jwtDecode from "jwt-decode"
import { logout, setCurrentUser } from "./auth"

type AppThunkType = ThunkAction<Promise<void>, GlobalState, unknown, AppActionTypes>

const setAppInitialized = (isInitialized: boolean): ISetAppInitialized => ({
    type: SET_INITIALIZED,
    isInitialized
})

export const setMessage = (message: IMessage | null): ISetMessage => ({
    type: SET_MESSAGE,
    message
})

export const initialization = (history: any): AppThunkType => async dispatch => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (token) {
        const decoded: ICurrentUser = jwtDecode(token)
        dispatch(setCurrentUser(decoded))
        const currentTime = Date.now() / 1000
        if (decoded.exp && decoded.exp < currentTime) {
            dispatch(logout())
            history.push("/login")
        }
    }
    dispatch(setAppInitialized(true))
}