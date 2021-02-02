import {SET_AUTH_LOADING, SET_CURRENT_USER} from "../actions/types"
import {AuthActionsTypes} from "../actions/auth.actions"
import {ICurrentUser} from "../../types/types"

interface IAuthState {
    isAuthenticated: boolean
    currentUser: ICurrentUser
    isAuthLoading: boolean
}

const initialState: IAuthState = {
    isAuthenticated: false,
    currentUser: {
        userId: null,
        iat: null,
        exp: null
    },
    isAuthLoading: false
}

export const authReducer = (state = initialState, action: AuthActionsTypes): IAuthState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload.userId,
                currentUser: action.payload
            }
        case SET_AUTH_LOADING: {
            return {
                ...state,
                isAuthLoading: action.isLoading
            }
        }
        default:
            return state
    }
}