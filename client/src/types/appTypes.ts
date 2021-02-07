import { SET_INITIALIZED, SET_MESSAGE } from "../redux/actions/types"
import { ISetCurrentUser } from "./authTypes"

export interface IMessage {
    type: "success" | "error"
    body: string
}

export interface ISetMessage {
    type: typeof SET_MESSAGE
    message: IMessage | null
}

export interface ISetAppInitialized {
    type: typeof SET_INITIALIZED
    isInitialized: boolean
}

export type AppActionTypes = ISetMessage | ISetAppInitialized | ISetCurrentUser