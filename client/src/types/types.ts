export type ProfileType = {
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

export type LikeType = {
    id: string
    user: ProfileType
    createdDate: string
}

export type PostType = {
    id: string
    body: string
    createdDate: string
    user: ProfileType
    likes: Array<LikeType>
}

export type CurrentUserType = {
    userId: string | null
    userName: string | null
    iat: number | null
    exp: number | null
}

export type UpdateProfileType = {
    name: string
    email: string
    birthDate: string
    city: string | null
    maritalStatus: string | null
    education: string | null
    job: string | null
}

export type LoginDataType = {
    email: string
    password: string
}

export type RegisterDataType = {
    name: string
    email: string
    password: string
    birthDate: string
}

export type UpdatePasswordDataType = {
    password: string
    password2: string
}