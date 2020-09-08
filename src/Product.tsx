import React from 'react';
import './Product.css';

interface ProductInterface {
    id: string,
    title: string,
    image: string,
    price: number,
    rating: number
};

function Product(productInterface: ProductInterface) {
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
            <button>Add to basket</button>
        </div>
    );
}

export default Product
