import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

export interface ProductInterface {
    id: string,
    title: string,
    image: string,
    price: number,
    rating: number
};

function Product(productInterface: ProductInterface): JSX.Element {

    const [userState, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: productInterface
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{productInterface.title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{productInterface.price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(productInterface.rating).fill(null).map((_) => <p>⭐</p>)
                    }
                </div>
            </div>
            <img src={productInterface.image} alt='' />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product
