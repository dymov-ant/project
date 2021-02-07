import { AppActionTypes, IMessage } from "../../types/appTypes"
import { SET_INITIALIZED, SET_MESSAGE } from "../actions/types"

interface IAppState {
    isInitialized: boolean
    message: IMessage | null
}

const initialState: IAppState = {
    isInitialized: false,
    message: null
}

export const appReducer = (state = initialState, action: AppActionTypes): IAppState => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state
    }
}