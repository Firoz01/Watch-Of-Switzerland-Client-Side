import React, { useEffect, useState } from 'react';

import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';
import './MyOrder.css'
const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [user.email]);

   console.log(myOrder);

    return (
        <div className='container'>
            <div className='row'>
                {
                    myOrder.map(order =><Order key={order._id} order={order}></Order>)
                }
           </div>
        </div>
    );
};

export default MyOrder;