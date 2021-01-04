import {SET_PROFILE, SET_STATUS, SET_USER_PHOTO} from "./types";
import {profileAPI} from "../../services/api";
import {addNotification, setLoading, setNotFound} from "./app";
import {isErrors} from "../../services/isErrorsInActions";

export const setProfile = data => ({
    type: SET_PROFILE,
    payload: data
});

export const setUserPhoto = photoUrl => ({
    type: SET_USER_PHOTO,
    payload: photoUrl
});

export const setStatus = status => ({
    type: SET_STATUS,
    payload: status
});

export const getProfile = id => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.getProfile(id);
        if (response.status === 200) {
            const {photo, posts, ...profile} = response.data;
            dispatch(setProfile({posts, profile}));
            if (photo) {
                dispatch(setUserPhoto("http://localhost:5000/" + photo));
            }
            dispatch(setNotFound(false));
        }
        dispatch(setLoading(false));
    } catch (e) {
        isErrors(e, dispatch);
    }
};

export const updateProfile = (userId, profileData) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.updateProfile(profileData);
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
        isErrors(e, dispatch);
    }
};

export const updateUserPhoto = (file) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.updateUserPhoto(file);
        if (response.status === 200) {
            dispatch(addNotification({
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                body: response.data.message,
                type: "success"
            }));
        }
        dispatch(setLoading(false));
    } catch (e) {
        isErrors(e, dispatch);
    }
}

export const updatePassword = (passwords) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.updatePassword(passwords);
        if (response.status === 200) {
            dispatch(addNotification({
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                body: response.data.message,
                type: "success"
            }));
        }
        dispatch(setLoading(false));
    } catch (e) {
        isErrors(e, dispatch);
    }
};

export const updateProfileStatus = (status, userId) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await profileAPI.updateStatus(status);
        if (response.status === 200) {
            dispatch(getProfile(userId));
        }
        dispatch(setLoading(false));
    } catch (e) {
        isErrors(e, dispatch);
    }
};