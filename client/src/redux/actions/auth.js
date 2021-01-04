import jwtDecode from "jwt-decode";
import {SET_CURRENT_USER} from "./types";
import {addNotification, setLoading} from "./app";
import {authAPI} from "../../services/api";
// import setAuthToken from "../../services/setAuthToken";
import {isErrors} from "../../services/isErrorsInActions";

export const setCurrentUser = user => ({
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
        isErrors(e, dispatch);
    }
}

export const login = userData => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await authAPI.login(userData);
        if (response.status === 200) {
            const {token} = response.data;
            localStorage.setItem("access_token", token);
            // setAuthToken(token);
            const decode = jwtDecode(token);
            dispatch(setCurrentUser(decode));
        }
        dispatch(setLoading(false));

    } catch (e) {
        isErrors(e, dispatch);
        // const response = e.response;
        // if (response.status === 400) {
        //     if (response.data.errors) {
        //         response.data.errors.map(e => dispatch(addNotification({
        //             id: `f${(~~(Math.random()*1e8)).toString(16)}`,
        //             body: e.msg,
        //             type: "danger"
        //         })));
        //     } else {
        //         dispatch(addNotification({
        //             id: `f${(~~(Math.random()*1e8)).toString(16)}`,
        //             body: response.data.message,
        //             type: "danger"
        //         }));
        //     }
        // }
        // dispatch(setLoading(false));
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("access_token");
    dispatch(setCurrentUser({}));
}
