import {SET_CURRENT_USER} from "./types";
import {addNotification, setLoading} from "./app";
import {authAPI} from "../../services/api";

export const SetCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user,
});

export const register = (userData, history) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await authAPI.register(userData);
        if (response.status === 201) {
            dispatch(addNotification({
                id: `f${(~~(Math.random()*1e8)).toString(16)}`,
                body: response.data.message,
                type: "success"
            }));
            history.push("/login");
        }
        dispatch(setLoading(false));
    } catch (e) {
        const response = e.response;
        if (response.status === 400) {
            if (response.data.errors) {
                response.data.errors.map(e => dispatch(addNotification({
                    id: `f${(~~(Math.random()*1e8)).toString(16)}`,
                    body: e.msg,
                    type: "danger"
                })));
            } else {
                dispatch(addNotification({
                    id: `f${(~~(Math.random()*1e8)).toString(16)}`,
                    body: response.data.message,
                    type: "danger"
                }));
            }
        }
        dispatch(setLoading(false));
    }
}
