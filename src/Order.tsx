import React from 'react'
import './Order.css';
import { ProductInterface } from './Product';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

export interface OrderDocument {
    basket: Array<ProductInterface>,
    created: number,
    amount: number
}

interface OrderModel {
    order: {
        id: string,
        data: OrderDocument
    }
}

function Order(props: OrderModel) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(props.order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="order__id">
                <small>{props.order.id}</small>
            </p>
            {props.order.data.basket?.map(function (item) {
                return <CheckoutProduct item={item} hideButton={true} />
            })}
            <CurrencyFormat
                decimalScale={2}
                value={props.order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value: any) => (
                    <h3>Order Total: {value}</h3>
                )}
            />
        </div>
    )
}

export default Order
