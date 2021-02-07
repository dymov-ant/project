import { api } from "./api"
import { ILoginData, ILoginResponse, IRegisterData } from "../../types/authTypes"
import { IResponse } from "../../types/commonTypes"

const LOGIN_URL = "auth/login"
const REGISTER_URL = "auth/register"

const login = (userData: ILoginData) => api.post<ILoginResponse>(LOGIN_URL, userData)
const register = (userData: IRegisterData) => api.post<IResponse>(REGISTER_URL, userData)

export default {login, register}