import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from '../../hooks/http.hook';

const initialState = {
    products: [],
    loading: 'idle',
    maxPrice: 0,
}
const { request } = useHttp();

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return await request('http://localhost:3000/products')
    }
)

export const fetchMaxPrice = createAsyncThunk(
    'products/fetchMaxPrice',
    async () => {
        return await request('http://localhost:3000/products')
    }
)

export const fetchProductRemove = createAsyncThunk(
    'products/removeProduct',
    async id => {
        return await request(`http://localhost:3000/products/${id}`, 'DELETE')
            .then(_ => id)
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => { state.loading = 'loading' })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, state => {
                state.loading = 'error';
                state.products = []
            })
            .addCase(fetchMaxPrice.fulfilled, (state, action) => {
                state.maxPrice = action.payload.sort((b, a) => b.price - a.price)[action.payload.length - 1].price
            })
            .addCase(fetchProductRemove.fulfilled, (state, action) => {
                state.products = state.products.filter(product => product.id !== action.payload)
            })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = productsSlice;

export default reducer;

export const {
    productRemoved,
    productMaxPriceFetched
} = actions;