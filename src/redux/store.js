import {createStore, combineReducers} from 'redux';
import phoneReducer from './phone/reducerPhone';
import tvReducer from './tv/reducerTv';
import tabletReducer from './tablet/reducerTablet';

const rootReducer = combineReducers({
    phone:phoneReducer,
    television:tvReducer,
    tablet:tabletReducer
})

const store = createStore(rootReducer)

export default store;