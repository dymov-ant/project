import { api } from "./api"
import { IProfile } from "../../types/profileTypes"

const GET_PROFILE_URL = "/profile"

const getProfile = (userId: string) => api.get<IProfile>(GET_PROFILE_URL, { params: { id: userId } })

export default { getProfile }