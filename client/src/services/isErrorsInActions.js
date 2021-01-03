import {addNotification, setLoading, setNotFound} from "../redux/actions/app";

export const isErrors = (e, dispatch) => {
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
    if (response.status === 500) {
        dispatch(addNotification({
            id: `f${(~~(Math.random()*1e8)).toString(16)}`,
            body: response.data.message,
            type: "danger"
        }));
    }
    if (response.status === 404) {
        dispatch(setNotFound(true));
    }
    dispatch(setLoading(false));
}