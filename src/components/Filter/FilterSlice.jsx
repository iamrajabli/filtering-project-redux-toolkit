import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
    range: 0,
    clothes: [],
    clothesLabels: []
}

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const { request } = useHttp();
        return await request('http://localhost:3000/clothing')
    }
)

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChangeRange: (state, action) => { state.range = action.payload },
        filtersChooseClothes: (state, action) => {
            state.clothes = state.clothes.indexOf(action.payload) === -1 ?
                [...state.clothes, action.payload] :
                state.clothes.filter(item => item !== action.payload)
        },
        filtersReset: state => {
            state.range = 0;
            state.clothes = [];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.clothesLabels = action.payload
            })
    }
});

const { actions, reducer } = filterSlice;

export default reducer;
export const {
    filtersChangeRange,
    filtersChooseClothes,
    filtersReset
} = actions;