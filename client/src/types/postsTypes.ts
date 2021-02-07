import { IProfile } from "./profileTypes"

interface ILike {
    id: string
    user: IProfile
    createdDate: string
}

export interface IPost {
    id: string
    body: string
    createdDate: string
    user: IProfile
    likes: ILike[]
}