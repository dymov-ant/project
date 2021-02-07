import jwtDecode from "jwt-decode"
import { ThunkAction } from "redux-thunk"
import { AuthActionsTypes, ICurrentUser, ILoginData, ISetAuthLoading, ISetCurrentUser } from "../../types/authTypes"
import { SET_AUTH_LOADING, SET_CURRENT_USER } from "./types"
import { GlobalState } from "../store"
import { loginAPI } from "../../services/api/authAPI"
import { ACCESS_TOKEN } from "../../constants"
import { setMessage } from "./app"

type AuthThunkType = ThunkAction<Promise<void>, GlobalState, unknown, AuthActionsTypes>

export const setCurrentUser = (userData: ICurrentUser | null): ISetCurrentUser => ({
    type: SET_CURRENT_USER,
    payload: userData
})

const setAuthLoading = (isLoading: boolean): ISetAuthLoading => ({
    type: SET_AUTH_LOADING,
    isLoading
})

export const login = (payload: ILoginData): AuthThunkType => async dispatch => {
    dispatch(setAuthLoading(true))
    try {
        const response = await loginAPI(payload)
        if (response.status === 200) {
            const { token } = response.data
            localStorage.setItem(ACCESS_TOKEN, token)
            const decoded: ICurrentUser = jwtDecode(token)
            dispatch(setCurrentUser(decoded))
        }
        dispatch(setAuthLoading(false))
    } catch (e) {
        const response = e.response
        if (response.data.message) {
        dispatch(setMessage({ type: "error", body: response.data.message }))
        }
        dispatch(setAuthLoading(false))
    }
}

export const logout = (): AuthThunkType => async dispatch => {
    localStorage.removeItem(ACCESS_TOKEN)
    dispatch(setCurrentUser(null))
}