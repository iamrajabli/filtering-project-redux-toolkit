import { createAction } from "@reduxjs/toolkit";

import {
    productsFetching,
    productsFetchingError,
    productRemoved,
} from '../components/Products/ProductsSlice';

export const fetchData = (request, action, url = 'http://localhost:3000/products') => dispatch => {
    dispatch(productsFetching());
    request(url)
        .then(data => dispatch(action(data)))
        .catch(_ => dispatch(productsFetchingError()))
}

export const fetchRemovingProduct = (request, id) => dispatch => {
    request(`http://localhost:3000/products/${id}`, 'DELETE')
        .then(_ => dispatch(productRemoved(id)))
        .catch(_ => dispatch(productsFetchingError()))
}

// export const productsFetching = createAction('PRODUCTS_FETCHING')

// export const productsFetching = _ => {
//     return {
//         type: 'PRODUCTS_FETCHING'
//     }
// }

// export const productsFetchingError = createAction('PRODUCTS_FETCHING_ERROR')

// export const productsFetchingError = _ => {
//     return {
//         type: 'PRODUCTS_FETCHING_ERROR'
//     }
// }
// export const productsFetched = createAction('PRODUCTS_FETCHED')

// export const productsFetched = products => {
//     return {
//         type: 'PRODUCTS_FETCHED',
//         payload: products
//     }
// }

// export const productRemoved = createAction('PRODUCT_REMOVED')

// export const productRemoved = id => {
//     return {
//         type: 'PRODUCT_REMOVED',
//         payload: id
//     }
// }

// export const productMaxPriceFetched = createAction('PRODUCT_MAX_PRICE_FETCHED')

// export const productMaxPriceFetched = price => {
//     return {
//         type: 'PRODUCT_MAX_PRICE_FETCHED',
//         payload: price
//     }
// }

export const filtersChangeRange = createAction('FILTERS_CHANGE_RANGE')

// export const filtersChangeRange = range => {
//     return {
//         type: 'FILTERS_CHANGE_RANGE',
//         payload: range
//     }
// }

export const filtersChooseClothes = createAction('FILTERS_CHOOSE_CLOTHES')

// export const filtersChooseClothes = name => {
//     return {
//         type: 'FILTERS_CHOOSE_CLOTHES',
//         payload: name
//     }
// }

export const filtersClothesLabelsFetched = createAction('FILTERS_CLOTHES_LABELS_FETCHED')

// export const filtersClothesLabelsFetched = labels => {
//     return {
//         type: 'FILTERS_CLOTHES_LABELS_FETCHED',
//         payload: labels
//     }
// }

export const filtersReset = createAction('FILTERS_RESET')

// export const filtersReset = _ => {
//     return {
//         type: 'FILTERS_RESET'
//     }
// }
