import {AppActionsTypes} from "../actions/app.actions"
import {SET_INITIALIZED, SET_MESSAGE} from "../actions/types"
import {IMessage} from "../../types/types"

interface IAppState {
    isInitialized: boolean
    message: IMessage | null
}

const initialState: IAppState = {
    isInitialized: false,
    message: {
        type: "error",
        body: ""
    }
}

export const appReducer = (state = initialState, action: AppActionsTypes): IAppState => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}