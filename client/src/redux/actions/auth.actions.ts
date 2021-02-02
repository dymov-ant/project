import jwtDecode from "jwt-decode"
import {SET_AUTH_LOADING, SET_CURRENT_USER} from "./types"
import {ICurrentUser, ILoginData, ISetCurrentUser, ISetMessage} from "../../types/types"
import {ThunkAction} from "redux-thunk"
import {GlobalState} from "../store"
import {authAPI} from "../../services/api"
import {setMessage} from "./app.actions"

interface ISetAuthLoading {
    type: typeof SET_AUTH_LOADING
    isLoading: boolean
}

export type AuthActionsTypes = ISetCurrentUser | ISetAuthLoading | ISetMessage
type AuthThunkCreatorType = ThunkAction<Promise<void>, GlobalState, unknown, AuthActionsTypes>


export const setCurrentUser = (userData: ICurrentUser): ISetCurrentUser => ({
    type: SET_CURRENT_USER,
    payload: userData
})

const setAuthLoading = (isLoading: boolean): ISetAuthLoading => ({
    type: SET_AUTH_LOADING,
    isLoading
})

export const login = (payload: ILoginData): AuthThunkCreatorType => async dispatch => {
    dispatch(setAuthLoading(true))
    try {
        const response = await authAPI.login(payload)
        if (response.status === 200) {
            const {token} = response.data
            localStorage.setItem("access_token", token)
            const decoded: ICurrentUser = jwtDecode(token)
            dispatch(setCurrentUser(decoded))
        }
        dispatch(setAuthLoading(false))
    } catch (e) {
        const response = e.response
        if (response.status === 400) {
            dispatch(setMessage({type: "error", body: response.data.message}))
        }
        dispatch(setAuthLoading(false))
    }
}

export const logout = (): AuthThunkCreatorType => async dispatch => {
    localStorage.removeItem("access_token")
    dispatch(setCurrentUser({
        userId: null,
        exp: null,
        iat: null
    }))
}
