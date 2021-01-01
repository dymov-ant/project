import {SET_PROFILE} from "./types";
import {profileAPI} from "../../services/api";

export const setProfile = data => ({
    type: SET_PROFILE,
    payload: data
});

export const getProfile = id => async dispatch => {
    try {
        const response = await profileAPI.getProfile(id);
        console.log(response.data)
        dispatch(setProfile(response.data));
    } catch (e) {

    }
}