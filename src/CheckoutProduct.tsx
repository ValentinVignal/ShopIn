import React from 'react';
import { ProductInterface } from './Product';
import { useStateValue } from './StateProvider';

interface CheckoutProductProps {
    item: ProductInterface,
    hideButton?: boolean
};

function CheckoutProduct(props: CheckoutProductProps) {
    const [userState, dispatch] = useStateValue();

    const item = props.item;

    const removeFromBasket = (): void => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item.id
        });
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={item.image} alt='' />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(item.rating).fill(null).map((_, i) => (<p>⭐</p>))}
                </div>
                {!props.hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>

                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
