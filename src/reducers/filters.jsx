const initialState = {
    range: 0,
    clothes: [],
    clothesLabels: []
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTERS_CHANGE_RANGE':
            return {
                ...state,
                range: action.payload
            }

        case 'FILTERS_CHOOSE_CLOTHES':
            return {
                ...state,
                clothes: state.clothes.indexOf(action.payload) === -1 ?
                    [...state.clothes, action.payload] :
                    state.clothes.filter(item => item !== action.payload)
            }

        case 'FILTERS_CLOTHES_LABELS_FETCHED':
            return {
                ...state,
                clothesLabels: action.payload
            }

        case 'FILTERS_RESET':
            return {
                ...state,
                range: 0,
                clothes: []
            }

        default:
            return state;
    }
}

export default filters;