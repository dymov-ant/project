import { SET_AUTH_LOADING, SET_CURRENT_USER } from "../redux/actions/types"
import { ISetMessage } from "./appTypes"

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    name: string
    email: string
    password: string
    birthDate: Date
}

export interface ILoginResponse {
    token: string
}

export interface ICurrentUser {
    userId: string
    iat: number
    exp: number
}

export interface ISetCurrentUser {
    type: typeof SET_CURRENT_USER
    payload: ICurrentUser | null
}

export interface ISetAuthLoading {
    type: typeof SET_AUTH_LOADING
    isLoading: boolean
}

export type AuthActionsTypes = ISetCurrentUser | ISetAuthLoading | ISetMessage