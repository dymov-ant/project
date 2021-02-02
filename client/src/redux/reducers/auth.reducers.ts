import {SET_AUTH_LOADING, SET_CURRENT_USER} from "../actions/types"
import {AuthActionsTypes} from "../actions/auth.actions"
import {CurrentUserType} from "../../types/types"

const initialState = {
    isAuthenticated: false,
    currentUser: {
        userId: null,
        userName: null,
        iat: null,
        exp: null
    } as CurrentUserType,

    isLoading: false
}
type TAuthState = typeof initialState

export const authReducer = (state = initialState, action: AuthActionsTypes): TAuthState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload.userId,
                currentUser: action.payload
            }
        case SET_AUTH_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}