import {combineReducers} from "redux"
import { authReducer } from "./auth"
import { appReducer } from "./app"
import { profileReducer } from "./profile"


export default combineReducers({authReducer, appReducer, profileReducer })