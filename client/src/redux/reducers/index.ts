import {combineReducers} from "redux"
import { authReducer } from "./auth"
import { appReducer } from "./app"
import { profileReducer } from "./profile"
import {postsReducer} from "./posts";


export default combineReducers({authReducer, appReducer, profileReducer, postsReducer })