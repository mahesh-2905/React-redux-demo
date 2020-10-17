import {createStore , applyMiddleware} from 'redux';
import Reducer from '../reducer';

let store = createStore(Reducer , applyMiddleware());

export default store;