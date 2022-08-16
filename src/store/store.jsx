import products from '../components/Products/ProductsSlice';
import filters from '../components/Filter/FilterSlice';
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../api/apiSlice';

// const store = createStore(combineReducers({ products, filters }),
//     compose(applyMiddleware(ReduxThunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


const store = configureStore({
    reducer: {
        products,
        filters,
        [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'prodaction'
})

export default store;