import {combineReducers} from "redux";
import {appReducer} from "./app.reducers";
import {authReducer} from "./auth.reducers";
import {profileReducer} from "./profile.reducers";
import {postsReducer} from "./posts.reducers";

export default combineReducers({appReducer, authReducer, profileReducer, postsReducer})