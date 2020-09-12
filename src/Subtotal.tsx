import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { ActionShoppingBasket } from 'material-ui/svg-icons';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './Subtotal.css';

function Subtotal() {

    const [userState, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                decimalScale={2}
                value={getBasketTotal(userState.basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value: any) => (
                    <>
                        <p>
                            Subtotal ({userState.basket.length} items): <strong>{`$${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type='checkbox' /> {' This order contains a gift'}
                        </small>
                    </>
                )}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal
