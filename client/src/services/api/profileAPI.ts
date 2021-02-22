import {api} from "./api"
import {IProfile} from "../../types/profileTypes"
import {IResponse} from "../../types/commonTypes"

const GET_PROFILE_URL = "/profile"
const UPDATE_STATUS_URL = "/profile/edit/status"

const getProfile = (userId: string) => api.get<IProfile>(GET_PROFILE_URL, { params: { id: userId } })
const updateStatus = (status: string) => api.post<IResponse>(UPDATE_STATUS_URL, { status })

const profileAPI = { getProfile, updateStatus }

export default profileAPI