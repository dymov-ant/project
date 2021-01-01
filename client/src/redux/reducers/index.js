import {combineReducers} from "redux";

import app from "./app";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({app, auth, profile});