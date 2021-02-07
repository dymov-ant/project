import { AuthActionsTypes, ICurrentUser } from "../../types/authTypes"
import { SET_AUTH_LOADING, SET_CURRENT_USER } from "../actions/types"

interface IAuthState {
    isAuthenticated: boolean
    currentUser: ICurrentUser | null
    isAuthLoading: boolean
}

const initialState: IAuthState = {
    currentUser: null,
    isAuthenticated: false,
    isAuthLoading: false
}

export const authReducer = (state = initialState, action: AuthActionsTypes): IAuthState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload,
                currentUser: action.payload
            }
        case SET_AUTH_LOADING:
            return {
                ...state,
                isAuthLoading: action.isLoading
            }
        default:
            return state
    }
}