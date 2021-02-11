import { IProfile, ISetProfile, ISetProfileLoading, ProfileActionsTypes } from "../../types/profileTypes"
import { SET_PROFILE, SET_PROFILE_LOADING } from "./types"
import { ThunkAction } from "redux-thunk"
import { GlobalState } from "../store"
import profileAPI from "../../services/api/profileAPI"
import { setMessage } from "./app"

type ProfileThunkType = ThunkAction<Promise<void>, GlobalState, unknown, ProfileActionsTypes>

const setProfileLoading = (isLoading: boolean): ISetProfileLoading => ({
    type: SET_PROFILE_LOADING,
    isLoading
})

const setProfile = (profile: IProfile): ISetProfile => ({
    type: SET_PROFILE,
    payload: profile
})

export const getProfile = (userId: string): ProfileThunkType => async dispatch => {
    dispatch(setProfileLoading(true))
    try {
        const response = await profileAPI.getProfile(userId)
        if (response.status === 200) {
            dispatch(setProfile(response.data))
        }
        dispatch(setProfileLoading(false))
    } catch (e) {
        const response = e.response
        if (response.data.message) {
            dispatch(setMessage({ type: "error", body: response.data.message }))
        }
    }
}