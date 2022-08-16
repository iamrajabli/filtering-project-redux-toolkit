import { useSelector, useDispatch } from 'react-redux';
import { BsSuitHeart } from 'react-icons/bs';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { useEffect } from 'react';
import { fetchMaxPrice } from './ProductsSlice';
import { useGetProductsQuery, useDeleteProductMutation } from '../../api/apiSlice';
const Products = _ => {

    const {
        data: products = [],
        isLoading,
        isError,
    } = useGetProductsQuery();


    const dispatch = useDispatch();
    const { clothes, range } = useSelector(state => state.filters);
    const [deleteProduct] = useDeleteProductMutation();

    // FILTER
    const filteredProducts = () => {
        const filteredProducts = [];
        const copyProducts = products.slice();

        if (range === 0 && clothes.length === 0) return products;

        if (clothes.length === 0) {
            products.forEach(item => filteredProducts.push(item))
        } else {
            clothes.forEach(item => {
                products.forEach(product => {
                    if (product.clothing === item) {
                        filteredProducts.push(product)
                    }
                })
            });
        }

        const maxPrice = copyProducts.sort((b, a) => a.price - b.price)[0].price;

        return filteredProducts
            .filter(product => (product.price >= range && product.price <= maxPrice))
    }



    useEffect(() => {
        dispatch(fetchMaxPrice())
    }, []);

    const onRemove = id => {
        deleteProduct(id)
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

    const elements = renderElements(filteredProducts());

    return (
        <section id="products">
            <div className="products__container">
                {elements}
                {isLoading ? <Loading /> : null}
                {isError ? <Error /> : null}
            </div>
        </section>
    )
}

export default Products;