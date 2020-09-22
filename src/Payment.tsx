import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [userState, dispatch] = useStateValue();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(function () {
        async function getClientSecret() {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(userState.basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [userState.basket]);

    async function confirmSecret(secret: string): Promise<boolean> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return secret === 'secret';
    }

    console.log('the secret is ', clientSecret);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        setProcessing(true);
        const isConfirmed = await confirmSecret(clientSecret);
        const now = Date.now();
        const paymentId = now.toString();
        if (isConfirmed) {
            db.collection('users').doc(userState.user.uid).collection('orders').doc(paymentId).set({
                basket: userState.basket,
                amount: getBasketTotal(userState.basket),
                created: now
            });

            setSucceeded(true);
            setError('');

            dispatch({
                type: 'EMPTY_BASKET'
            });
        } else {
            setSucceeded(false);
            setError('Error');
        }
        setProcessing(false);

        history.replace('./orders');
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setDisabled(event.target.value.length === 0);
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout ({<Link to='/checkout'>{userState.basket?.length} items)</Link>}
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className="payment__address">
                        <p>{userState.user?.email}</p>
                        <p> 123 React Lane </p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {userState.basket.map(item => (
                            <CheckoutProduct
                                item={item}
                            />
                        ))}
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>

                            <input className='payment__cardNumber' onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    decimalScale={2}
                                    value={getBasketTotal(userState.basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    renderText={(value: any) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>

                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
