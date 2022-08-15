import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    range: 0,
    clothes: [],
    clothesLabels: []
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChangeRange: (state, action) => { state.range = action.payload },
        filtersChooseClothes: (state, action) => {
            state.clothes.indexOf(action.payload) === -1 ?
                state.clothes.push(action.payload) :
                state.clothes.filter(item => item !== action.payload)
        },
        filtersClothesLabelsFetched: (state, action) => { state.clothesLabels = action.payload },
        filtersReset: state => {
            state.range = 0;
            state.clothes = [];
        }
    }
});

const { actions, reducer } = filterSlice;

export default reducer;
export const {
    filtersChangeRange,
    filtersChooseClothes,
    filtersClothesLabelsFetched,
    filtersReset
} = actions;