import {combineReducers} from "redux";
import {appReducer} from "./app";
import {authReducer} from "./auth";
import {profileReducer} from "./profile";
import {postsReducer} from "./posts";

export default combineReducers({appReducer, authReducer, profileReducer, postsReducer});