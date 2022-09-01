import {BUY_TABLET} from './type';

const initialStateTablet = {
    tablet:15
}

const tabletReducer = (state = initialStateTablet, action) => {
    switch (action.type) {
        case BUY_TABLET:
            return {
                ...state,
                tablet:state.tablet - 1
            }
        default: return state
    }
}

export default tabletReducer;