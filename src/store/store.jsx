import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk';
import { products, filters } from '../reducers';

const store = createStore(combineReducers({ products, filters }),
    compose(applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;