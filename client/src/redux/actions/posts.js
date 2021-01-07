import {ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POSTS} from "./types";
import {addNotification, setLoading} from "./app";
import {postsAPI} from "../../services/api";
import {isErrors} from "../../services/isErrorsInActions";

export const setPosts = posts => ({
    type: SET_POSTS,
    payload: posts
});

export const addPost = post => ({
    type: ADD_POST,
    payload: post
});

export const updatePosts = post => ({
    type: UPDATE_POSTS,
    payload: post
});

export const getPosts = userId => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await postsAPI.getPosts(userId);
        dispatch(setPosts(response.data.posts));
        dispatch(setLoading(false));
    } catch (e) {
        isErrors(e, dispatch);
    }
}

export const createPost = post => async dispatch => {
    try {
        dispatch(setLoading(true));
        const response = await postsAPI.addPost(post);
        if (response.status === 201) {
            dispatch(addPost(response.data.post));
        }
        dispatch(setLoading(false));
    } catch (e) {
        isErrors(e, dispatch);
    }
}

export const deletePost = postId => async dispatch => {
    try {
        const response = await postsAPI.deletePost(postId);
        if (response.status === 200) {
            dispatch({
                type: DELETE_POST,
                payload: postId
            });
            dispatch(addNotification({
                id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                body: response.data.message,
                type: "success"
            }));
        }
    } catch (e) {
        isErrors(e, dispatch);
    }
}

export const createLike = postId => async dispatch => {
    try {
        const response = await postsAPI.createLike(postId);
        if (response.status === 200) {
            dispatch(updatePosts(response.data.post));
        }
    } catch (e) {

    }
};

export const removeLike = (postId, likeId) => async dispatch => {
    try {
        const response = await postsAPI.removeLike(postId, likeId);
        if (response.status === 200) {
            dispatch(updatePosts(response.data.post));
        }
    } catch (e) {

    }
}