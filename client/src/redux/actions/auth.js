import {SET_CURRENT_USER, SET_ERRORS} from "./types";
import {setLoading, setMessage} from "./app";
import {authAPI} from "../../services/api";

export const setErrors = errors => ({
    type: SET_ERRORS,
    payload: errors
});

export const SetCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user,
});

export const register = (userData, history) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await authAPI.register(userData);
        if (response.status === 201) {
            history.push("/login");
        }
        dispatch(setLoading(false));
    } catch (e) {
        const response = e.response;
        if (response.status === 400) {
            if (response.data.errors) {
                dispatch(setErrors(response.data.errors));
            } else {
                dispatch(setMessage(response.data.message));
            }
        }
        dispatch(setLoading(false));
    }
}
