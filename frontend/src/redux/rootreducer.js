import {combineReducers} from 'redux';
import bookReducer from './reducer';

const rootReducer = combineReducers({
    data : bookReducer
});

export default rootReducer;