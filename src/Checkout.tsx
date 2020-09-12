import React, { Dispatch } from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import { ProductInterface } from './Product';
import CheckoutProduct from './CheckoutProduct';
import { UserState, UserAction } from './reducer';
import './CheckoutProduct.css';
import Subtotal from './Subtotal';

function Checkout() {
    const [userState, dispatch]: [UserState, Dispatch<UserAction>] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className='checkout__ad'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvJW28e-pLWyVgYfngiln2LpIhT6rUGUNJEg&usqp=CAU"
                    alt=''
                />
                <h3>Hello, {userState.user?.email}</h3>
                {
                    (userState.basket.length) ? (
                        <div>
                            <h2 className='checkout__title'>Your Shopping basket</h2>
                            {userState.basket.map((item: ProductInterface) => (
                                <CheckoutProduct item={item} />
                            ))}
                        </div>
                    ) : (
                            <div>
                                <h2>Your Shopping Basket is empty</h2>
                            </div>
                        )
                }
            </div>
            {userState.basket.length > 0 && (
                < div className="checkout__right">
                    <h1>Subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div >
    );
}

export default Checkout
