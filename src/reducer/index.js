import {combineReducers} from 'redux';
import movies from './movieRedures';


const rootReducer = combineReducers({
    movies
});

export default rootReducer;