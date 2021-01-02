import {SET_PROFILE, SET_USER_PHOTO} from "./types";
import {profileAPI} from "../../services/api";
import {addNotification, setLoading} from "./app";

export const setProfile = data => ({
    type: SET_PROFILE,
    payload: data
});

export const setUserPhoto = photoUrl => ({
    type: SET_USER_PHOTO,
    payload: photoUrl
});

export const getProfile = id => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.getProfile(id);
        if (response.status === 200) {
            const {photo, posts, ...profile} = response.data;
            dispatch(setProfile({posts, profile}));
            dispatch(setUserPhoto("http://localhost:5000/" + photo));
        }
        dispatch(setLoading(false));
    } catch (e) {
        dispatch(setLoading(false));
    }
};

export const updateProfile = (userId, profileData) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.updateProfile(userId, profileData);
        if (response.status === 200) {
            dispatch(getProfile(userId));
            dispatch(addNotification({
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                body: response.data.message,
                type: "success"
            }))
        }
        dispatch(setLoading(false));
    } catch (e) {
        const response = e.response;
        if (response.status === 400) {
            dispatch(addNotification({
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                body: response.data.message,
                type: "danger"
            }));
        }
        dispatch(setLoading(false));
    }
};

export const updateUserPhoto = (file, id) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.updateUserPhoto(file, id);
        if (response.status === 200) {
            dispatch(addNotification({
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                body: response.data.message,
                type: "success"
            }));
        }
        dispatch(setLoading(false));
    } catch (e) {
        const response = e.response;
        if (response.status === 400) {
            dispatch(addNotification({
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                body: response.data.message,
                type: "danger"
            }));
        }
        dispatch(setLoading(false));
    }
}