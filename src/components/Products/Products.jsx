import { useSelector, useDispatch } from 'react-redux';
import { BsSuitHeart } from 'react-icons/bs';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { useEffect } from 'react';
import { fetchProducts, fetchProductRemove, fetchMaxPrice } from './ProductsSlice';
import useHttp from '../../hooks/http.hook';
const Products = _ => {

    const dispatch = useDispatch(),
        { loading } = useSelector(state => state.products),
        { request } = useHttp();


    // FILTER
    const products = useSelector(state => {
        const filteredProducts = [];

        if (state.filters.range === 0 &&
            state.filters.clothes.length === 0)
            return state.products.products;

        if (state.filters.clothes.length === 0) {
            state.products.products
                .forEach(item => filteredProducts.push(item))
        } else {
            state.filters.clothes.forEach(item => {
                state.products.products.forEach(product => {
                    if (product.clothing === item) {
                        filteredProducts.push(product)
                    }
                })
            });
        }

        return filteredProducts
            .filter(product => (product.price >= state.filters.range && product.price <= state.products.maxPrice))
    })


    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchMaxPrice())
    }, []);

    const onRemove = id => {
        dispatch(fetchProductRemove(id))
    }

    const renderElements = data => {
        if (!data || data.length === 0) {
            return (
                <section id="notfound">
                    <h1>no product found with these criteria</h1>
                </section>
            )
        };


        return data.map(({ id, alt, img, title, desc, price }) => (
            <div onClick={_ => onRemove(id)}
                key={id}
                className="products__wrapper">
                <div className="products__item">
                    <img src={img} alt={alt} />
                    <h4 className="products__title">{title}</h4>
                    <p className="products__desc">{desc}</p>
                    <div className="products__price">
                        <span>€ {price}</span>
                        <BsSuitHeart />
                    </div>
                </div>
            </div>
        ))
    };

    const elements = renderElements(products);

    return (
        <section id="products">
            <div className="products__container">
                {elements}
                {loading === 'loading' ? <Loading /> : null}
                {loading === 'error' ? <Error /> : null}
            </div>
        </section>
    )
}

export default Products;