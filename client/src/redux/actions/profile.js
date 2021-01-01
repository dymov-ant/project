import {SET_PROFILE} from "./types";
import {profileAPI} from "../../services/api";
import {addNotification} from "./app";

export const setProfile = data => ({
    type: SET_PROFILE,
    payload: data
});

export const getProfile = id => async dispatch => {
    try {
        const response = await profileAPI.getProfile(id);
        dispatch(setProfile(response.data));
    } catch (e) {

    }
};

export const updateProfile = profileData => async dispatch => {
    try {
        const response = await profileAPI.updateProfile(profileData);
        if (response.status === 200) {
            dispatch(addNotification({
                id: `f${(~~(Math.random()*1e8)).toString(16)}`,
                body: response.data.message,
                type: "success"
            }))
        }
        console.log(response.data);
    } catch (e) {

    }
}