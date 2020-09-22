import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order, { OrderDocument } from './Order';
import { ProductInterface } from './Product';

function Orders() {
    const [userState, dispatch] = useStateValue();
    const [orders, setOrders] = useState([] as Array<{ id: string, data: OrderDocument }>);

    useEffect(function () {
        if (userState.user) {
            db.collection('users').doc(userState.user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(function (snapshot) {
                console.log('snapshot', snapshot);
                setOrders(snapshot.docs.map(function (doc) {
                    console.log('data', doc.data());
                    return {
                        id: doc.id,
                        data: doc.data() as OrderDocument
                    };
                }));
            });
        } else {
            setOrders([]);
        }
    }, [userState.user]);

    console.log('users', userState.user);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(function (order) {
                    return <Order order={order} />
                })}
            </div>
        </div>
    );
}

export default Orders
