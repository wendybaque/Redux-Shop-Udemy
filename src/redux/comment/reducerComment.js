import {LOAD_COMMENT, LOAD_COMMENT_SUCCESS, LOAD_COMMENT_ERROR} from './type';

const initialStateComment = {
    isLoading:false,
    comments:[],
    error:''
}

const commentReducer =(state = initialStateComment, action) => {
    switch (action.type) {
        case LOAD_COMMENT:
            return {
                ...state,
                isLoading:true
            }
        case LOAD_COMMENT_SUCCESS:
            return {
                ...state,
                isLoading:false, 
                comments:action.payload,
                error:''
            }

        case LOAD_COMMENT_ERROR:
            return {
                ...state,
                isLoading:false, 
                comments:[],
                error:action.payload
            }

        default: return state

    }
}

export default commentReducer;