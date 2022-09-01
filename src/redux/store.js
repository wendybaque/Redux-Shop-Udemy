import {createStore, combineReducers, applyMiddleware} from 'redux';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';
import tabletReducer from './tablet/reducerTablet';
import commentReducer from './comment/reducerComment';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    phone:phoneReducer,
    television:tvReducer,
    tablet:tabletReducer,
    comments:commentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;