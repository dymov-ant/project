import {ProfileActionsTypes} from "../actions/profile.actions"
import {ProfileType} from "../../types/types"
import {SET_PHOTO, SET_PROFILE, SET_PROFILE_LOADING, SET_STATUS} from "../actions/types"

type TProfileState = {
    profile: ProfileType
    isLoading: boolean
}
const initialState: TProfileState = {
    profile: {
        email: null,
        name: null,
        birthDate: null,
        status: null,
        city: null,
        maritalStatus: null,
        education: null,
        job: null,
        photo: null,
        id: null
    },
    isLoading: false
}

export const profileReducer = (state = initialState, action: ProfileActionsTypes): TProfileState => {
    switch (action.type) {
        case SET_PROFILE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                profile: {...state.profile, status: action.status}
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photo: action.photo}
            }
        default:
            return state
    }
}