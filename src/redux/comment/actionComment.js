import {LOAD_COMMENT, LOAD_COMMENT_SUCCESS, LOAD_COMMENT_ERROR} from './type';
import axios from 'axios';

const loadApiComment = () => {
    return {
        type:LOAD_COMMENT
    }
}

const loadCommentError = (error) => {
    return {
        type:LOAD_COMMENT_ERROR,
        payload:error
    }
}

const loadCommentSuccess = (comments) => {
    return {
        type:LOAD_COMMENT_SUCCESS,
        payload: comments
    }
}

export const apiCall = () => {
    return (dispatch) => {

        dispatch(loadApiComment())

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            dispatch(loadCommentSuccess(res.data))
        })
        .catch(err => {
            dispatch(loadCommentError(err.message))
        })
    }
}
