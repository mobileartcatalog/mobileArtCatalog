import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import art from './reducers/artReducer/';

const rootReducer = combineReducers({ art });
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
