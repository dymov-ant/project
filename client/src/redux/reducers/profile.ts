import { IProfile, ProfileActionsTypes } from "../../types/profileTypes"
import { SET_PROFILE, SET_PROFILE_LOADING } from "../actions/types"

interface IProfileState {
    profile: IProfile | null
    isProfileLoading: boolean
}

const initialState: IProfileState = {
    profile: null,
    isProfileLoading: false
}

export const profileReducer = (state = initialState, action: ProfileActionsTypes): IProfileState => {
    switch (action.type) {
        case SET_PROFILE_LOADING:
            return {
                ...state,
                isProfileLoading: action.isLoading
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state
    }
}