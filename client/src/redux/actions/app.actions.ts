import {SET_INITIALIZED, SET_MESSAGE} from "./types"
import {ThunkAction} from "redux-thunk"
import {GlobalState} from "../store"
import {ICurrentUser, IMessage, ISetCurrentUser, ISetMessage} from "../../types/types"
import jwtDecode from "jwt-decode"
import {logout, setCurrentUser} from "./auth.actions"

interface ISetInitialized {
    type: typeof SET_INITIALIZED
    isInitialized: boolean
}

export type AppActionsTypes = ISetInitialized | ISetMessage | ISetCurrentUser
type AppThunkCreatorType = ThunkAction<Promise<void>, GlobalState, unknown, AppActionsTypes>

const setInitialized = (isInitialized: boolean): ISetInitialized => ({
    type: SET_INITIALIZED,
    isInitialized
})

export const setMessage = (message: IMessage | null): ISetMessage => ({
    type: SET_MESSAGE,
    message
})

export const initialization = (history: any): AppThunkCreatorType => async dispatch => {
    if (localStorage.access_token) {
        const {access_token} = localStorage
        const decoded: ICurrentUser = jwtDecode(access_token)
        dispatch(setCurrentUser(decoded))
        const currentTime = Date.now() / 1000
        if (decoded.exp && decoded.exp < currentTime) {
            await dispatch(logout())
            history.push("/login")
        }
    }
    // else {
    //     await dispatch(logout())
    //     history.push("/login")
    // }
    dispatch(setInitialized(true))
}