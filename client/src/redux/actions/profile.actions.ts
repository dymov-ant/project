import {SET_PHOTO, SET_PROFILE, SET_PROFILE_LOADING, SET_STATUS} from "./types";
import {ProfileType, UpdatePasswordDataType, UpdateProfileType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {GlobalState} from "../store";
import {profileAPI} from "../../services/api";

export type ProfileActionsTypes = TSetProfileLoading | TSetProfile | TSetStatus | TSetPhoto

type TSetProfileLoading = {
    type: typeof SET_PROFILE_LOADING
    isLoading: boolean
}
export const setProfileLoading = (isLoading: boolean): TSetProfileLoading => ({
    type: SET_PROFILE_LOADING,
    isLoading
})

export type TSetProfile = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
export const setProfile = (profile: ProfileType): TSetProfile => ({
    type: SET_PROFILE,
    profile
})

type TSetStatus = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): TSetStatus => ({
    type: SET_STATUS,
    status
})

type TSetPhoto = {
    type: typeof SET_PHOTO
    photo: any
}
export const setPhoto = (photo: any): TSetPhoto => ({
    type: SET_PHOTO,
    photo
})

type ProfileThunkCreatorType = ThunkAction<Promise<void>, GlobalState, unknown, ProfileActionsTypes | TSetProfile>

export const getProfile = (userId: string): ProfileThunkCreatorType => async dispatch => {
    dispatch(setProfileLoading(true))
    try {
        const response = await profileAPI.getProfile(userId)
        if (response.status === 200) {
            const profile = response.data
            dispatch(setProfile(profile))
        }
        dispatch(setProfileLoading(false))
    } catch (e) {
        dispatch(setProfileLoading(false))
    }
}

export const updateProfile = (userId: string, profileData: UpdateProfileType): ProfileThunkCreatorType => async dispatch => {
    dispatch(setProfileLoading(true))
    try {
        const response = await profileAPI.updateProfile(profileData)
        if (response.status === 200) {
            dispatch(getProfile(userId))
        }
        dispatch(setProfileLoading(false))
    } catch (e) {
        dispatch(setProfileLoading(false))
    }
}

export const updateUserPhoto = (file: any): ProfileThunkCreatorType => async dispatch => {
    dispatch(setProfileLoading(true))
    try {
        const response = await profileAPI.updateUserPhoto(file)
        if (response.status === 200) {
        //    todo Разобраться с акшеном setPhoto
        }
        dispatch(setProfileLoading(false))
    } catch (e) {
        dispatch(setProfileLoading(false))
    }
}

export const updatePassword = (passwords: UpdatePasswordDataType): ProfileThunkCreatorType => async dispatch => {
    dispatch(setProfileLoading(true))
    try {
        const response = await profileAPI.updatePassword(passwords)
        if (response.status === 200) {

        }
        dispatch(setProfileLoading(false))
    } catch (e) {
        dispatch(setProfileLoading(false))
    }
}

export const updateProfileStatus = (status: string, userId: string): ProfileThunkCreatorType => async dispatch => {
    dispatch(setProfileLoading(true))
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.status === 200) {
            dispatch(setStatus(status))
        }
        dispatch(setProfileLoading(false))
    } catch (e) {
        dispatch(setProfileLoading(false))
    }
}