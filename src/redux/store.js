import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from "redux";
import reducer from './reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.__store__ = store;
export default store;