// import { createReducer } from "@reduxjs/toolkit";
// import {
//     productsFetching,
//     productsFetchingError,
//     productsFetched,
//     productRemoved,
//     productMaxPriceFetched
// } from '../actions';

// const initialState = {
//     products: [],
//     loading: 'idle',
//     maxPrice: 0,
// }

// const products = createReducer(initialState, {
//     [productsFetching]: state => { state.loading = 'loading' },
//     [productsFetchingError]: state => {
//         state.loading = 'error';
//         state.products = [];
//     },
//     [productsFetched]: (state, action) => {
//         state.loading = 'idle';
//         state.products = action.payload;
//     },
//     [productRemoved]: (state, action) => { state.products = state.products.filter(product => product.id !== action.payload) },
//     [productMaxPriceFetched]: (state, action) => { state.maxPrice = action.payload.sort((b, a) => b.price - a.price)[action.payload.length - 1].price }
// },
//     [],
//     state => state
// )

// const products = createReducer(initialState, builder => {
//     builder
//         .addCase(productsFetching, state => {
//             state.loading = 'loading'
//         })
//         .addCase(productsFetchingError, state => {
//             state.loading = 'error';
//             state.products = [];
//         })
//         .addCase(productsFetched, (state, action) => {
//             state.loading = 'idle';
//             state.products = action.payload;
//         })
//         .addCase(productRemoved, (state, action) => {
//             state.products = state.products.filter(product => product.id !== action.payload)
//         })
//         .addCase(productMaxPriceFetched, (state, action) => {
//             state.maxPrice = action.payload.sort((b, a) => b.price - a.price)[action.payload.length - 1].price
//         })
// })

// const products = (state = initialState, action) => {
//     switch (action.type) {

//         case 'PRODUCTS_FETCHING':
//             return {
//                 ...state,
//                 loading: 'loading'
//             }

//         case 'PRODUCTS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 loading: 'error',
//                 products: []
//             }

//         case 'PRODUCTS_FETCHED':
//             return {
//                 ...state,
//                 loading: 'idle',
//                 products: action.payload,
//             }

//         case 'PRODUCT_REMOVED':
//             return {
//                 ...state,
//                 products: state.products.filter(product => product.id !== action.payload)
//             }

//         case 'PRODUCT_MAX_PRICE_FETCHED':
//             return {
//                 ...state,
//                 maxPrice: action.payload.sort((b, a) => b.price - a.price)[action.payload.length - 1].price
//             }

//         default:
//             return state;
//     }
// }

// export default products;