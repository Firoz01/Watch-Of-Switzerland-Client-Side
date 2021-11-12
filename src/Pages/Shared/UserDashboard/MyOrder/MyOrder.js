import React, { useEffect, useState } from 'react';
import useAlert from '../../../Hooks/useAlert';

import swal from "sweetalert";

import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';
import './MyOrder.css'
const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    const { confirmations } = useAlert();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data), setLoading(false));
    }, [loading,user.email]);


    const deleteConfirmation = () => {
        setLoading(true);
        confirmations();
    }


    const deleteOrder = () => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
    }

    return (
        <div className='container'>
            <div className='row'>
                {
                    myOrder.map(order =><Order key={order._id} deleteConfirmation={deleteConfirmation} order={order}></Order>)
                }
            </div>
            <button onClick={deleteOrder}> delete</button>
        </div>
    );
};

export default MyOrder;