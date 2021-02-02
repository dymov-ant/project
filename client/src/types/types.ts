import {SET_CURRENT_USER, SET_MESSAGE} from "../redux/actions/types"

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    name: string
    email: string
    password: string
    birthDate: string
}

export interface ICurrentUser {
    userId: string | null
    iat: number | null
    exp: number | null
}

export interface ISetCurrentUser {
    type: typeof SET_CURRENT_USER
    payload: ICurrentUser
}

export interface IMessage {
    type: "success" | "error"
    body: string
}

export interface ISetMessage {
    type: typeof SET_MESSAGE
    message: IMessage | null
}

export interface IProfile {
    email: string | null,
    name: string | null,
    birthDate: string | null,
    status: string | null,
    city: string | null,
    maritalStatus: string | null,
    education: string | null,
    job: string | null,
    photo: string | null,
    id: string | null
}

export interface LikeType {
    id: string
    user: IProfile
    createdDate: string
}

export interface IPost {
    id: string
    body: string
    createdDate: string
    user: IProfile
    likes: Array<LikeType>
}
