import {api} from "./api"
import {IPasswordsToUpdate, IProfile} from "../../types/profileTypes"
import {IResponse} from "../../types/commonTypes"

const GET_PROFILE_URL = "/profile"
const UPDATE_STATUS_URL = "/profile/edit/status"
const UPDATE_PHOTO = "/profile/edit/photo"
const UPDATE_PASSWORD = "/profile/edit/password"

const getProfile = (userId: string) => api.get<IProfile>(GET_PROFILE_URL, { params: { id: userId } })
const updateStatus = (status: string) => api.post<IResponse>(UPDATE_STATUS_URL, { status })
const updateUserPhoto = (file: FormData) => api.post<IResponse>(UPDATE_PHOTO, file, {
    headers: {"Content-Type": "multipart/form-data"}
})
const updatePassword = (passwords: IPasswordsToUpdate) => api.post<IResponse>(UPDATE_PASSWORD, passwords)

const profileAPI = { getProfile, updateStatus, updateUserPhoto, updatePassword }

export default profileAPI