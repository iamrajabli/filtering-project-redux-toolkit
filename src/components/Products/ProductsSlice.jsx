import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: 'idle',
    maxPrice: 0,
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsFetching: state => { state.loading = 'loading' },
        productsFetchingError: state => {
            state.loading = 'error';
            state.products = [];
        },
        productsFetched: (state, action) => {
            state.loading = 'idle';
            state.products = action.payload;
        },
        productRemoved: (state, action) => { state.products = state.products.filter(product => product.id !== action.payload) },
        productMaxPriceFetched: (state, action) => { state.maxPrice = action.payload.sort((b, a) => b.price - a.price)[action.payload.length - 1].price }
    }
})

const { actions, reducer } = productsSlice;

export default reducer;

export const {
    productsFetching,
    productsFetchingError,
    productsFetched,
    productRemoved,
    productMaxPriceFetched
} = actions;