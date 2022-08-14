const initialState = {
    products: [],
    loading: 'idle',
    maxPrice: 0,
}

const products = (state = initialState, action) => {
    switch (action.type) {

        case 'PRODUCTS_FETCHING':
            return {
                ...state,
                loading: 'loading'
            }

        case 'PRODUCTS_FETCHING_ERROR':
            return {
                ...state,
                loading: 'error',
                products: []
            }

        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                loading: 'idle',
                products: action.payload,
            }

        case 'PRODUCT_REMOVED':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }

        case 'PRODUCT_MAX_PRICE_FETCHED':
            return {
                ...state,
                maxPrice: action.payload.sort((b, a) => b.price - a.price)[action.payload.length - 1].price
            }

        default:
            return state;
    }
}

export default products;