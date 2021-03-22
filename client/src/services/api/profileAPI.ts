import {api} from "./api"
import { IPasswordsToUpdate, IProfile, IProfileToUpdate } from "../../types/profileTypes"
import {IResponse} from "../../types/commonTypes"

const GET_PROFILE_URL = "/profile"
const UPDATE_STATUS_URL = "/profile/edit/status"
const UPDATE_PROFILE = "/profile/edit"
const UPDATE_PHOTO = "/profile/edit/photo"
const UPDATE_PASSWORD = "/profile/edit/password"

const getProfile = (userId: string) => api.get<IProfile>(GET_PROFILE_URL, { params: { id: userId } })
const updateStatus = (status: string) => api.post<IResponse>(UPDATE_STATUS_URL, { status })
const updateUserPhoto = (file: FormData) => api.post<IResponse>(UPDATE_PHOTO, file, {
    headers: {"Content-Type": "multipart/form-data"}
})
const updatePassword = (passwords: IPasswordsToUpdate) => api.post<IResponse>(UPDATE_PASSWORD, passwords)
const updateProfile = (profile: IProfileToUpdate) => api.put<IProfile>(UPDATE_PROFILE, profile)

const profileAPI = { getProfile, updateStatus, updateUserPhoto, updatePassword, updateProfile }

export default profileAPI