import {SET_PROFILE, SET_PROFILE_LOADING} from "../redux/actions/types"
import {ISetMessage} from "./appTypes"

export interface IProfile {
    id: string | null
    name: string | null
    email: string | null
    birthDate: Date
    status: string | null
    city: string | null
    maritalStatus: string | null
    education: string | null
    job: string | null
    photo: string | null
}

export interface IProfileToUpdate {
    name: string
    email: string
    birthDate: Date
    city: string
    maritalStatus: string
    education: string
    job: string
}

export interface IPasswordsToUpdate {
    password: string
    newPassword: string
    newPassword2: string
}

export interface ISetProfileLoading {
    type: typeof SET_PROFILE_LOADING
    isLoading: boolean
}

export interface ISetProfile {
    type: typeof SET_PROFILE
    payload: IProfile
}

export type ProfileActionsTypes = ISetProfileLoading | ISetProfile | ISetMessage