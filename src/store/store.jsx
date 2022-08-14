import { products, filters } from '../reducers';
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(combineReducers({ products, filters }),
//     compose(applyMiddleware(ReduxThunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


const store = configureStore({
    reducer: { products, filters },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'prodaction'
})

export default store;