import jwtDecode from "jwt-decode";
import {ThunkAction} from "redux-thunk";
import {SET_AUTH_LOADING, SET_CURRENT_USER} from "./types"
import {CurrentUserType, LoginDataType, RegisterDataType} from "../../types/types"
import {GlobalState} from "../store";
import {authAPI} from "../../services/api";
import {setProfile, TSetProfile} from "./profile.actions";

export type AuthActionsTypes = TSetCurrentUser | TSetAuthLoading


export type TSetCurrentUser = {
    type: typeof SET_CURRENT_USER
    payload: CurrentUserType
}
export const setCurrentUser = (userData: CurrentUserType): TSetCurrentUser => ({
    type: SET_CURRENT_USER,
    payload: userData
})

type TSetAuthLoading = {
    type: typeof SET_AUTH_LOADING
    isLoading: boolean
}
export const setAuthLoading = (isLoading: boolean): TSetAuthLoading => ({
    type: SET_AUTH_LOADING,
    isLoading
})

type AuthThunkCreatorType = ThunkAction<Promise<void>, GlobalState, unknown, AuthActionsTypes | TSetProfile>

// todo Типизировать history
export const register = (userData: RegisterDataType, history: any): AuthThunkCreatorType => async dispatch => {
    dispatch(setAuthLoading(true))
    try {
        const response = await authAPI.register(userData)
        if (response.status === 201) {
            history.push("/login")
        }
        dispatch(setAuthLoading(false))
    } catch (e) {
        dispatch(setAuthLoading(false))
    }
}

export const login = (userData: LoginDataType): AuthThunkCreatorType => async dispatch => {
    dispatch(setAuthLoading(true))
    try {
        const response = await authAPI.login(userData)
        if (response.status === 200) {
            const {token} = response.data
            localStorage.setItem("access_token", token)
            // todo Поправить типизацию
            const decoded: CurrentUserType = jwtDecode(token)
            dispatch(setCurrentUser(decoded))
        }
        dispatch(setAuthLoading(false))
    } catch (e) {
        dispatch(setAuthLoading(false))
    }
}

export const logout = (): AuthThunkCreatorType => async dispatch => {
    localStorage.removeItem("access_token")
    dispatch(setCurrentUser({userId: null, userName: null, exp: null, iat: null}))
    dispatch(setProfile({
        id: null,
        name: null,
        email: null,
        photo: null,
        status: null,
        birthDate: null,
        job: null,
        city: null,
        education: null,
        maritalStatus: null
    }))
}
