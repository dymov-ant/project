import { SET_PROFILE, SET_PROFILE_LOADING } from "../redux/actions/types"
import { ISetMessage } from "./appTypes"

export interface IProfile {
    id: string | null
    name: string | null
    birthDate: string | null
    status: string | null
    city: string | null
    maritalStatus: string | null
    education: string | null
    job: string | null
    photo: string | null
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