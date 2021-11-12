import React from 'react';
import './Order.css'
const Order = (props) => {
  const { _id, title, price, status } = props.order;

  
 const handleDeleteOrder = (id) => {
   const proceed = window.confirm('Are you sure you want to delete this order?');
   if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data) {
          props.deleteConfirmation();
        }
      })
    }
  }

    return (
      <div className="col-sm-4 col-lg-4 my-5">
        <div class="card w-75 mx-auto">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="card-title fs-6 ">{title}</h5>
                <p>{price} Tk</p>
              </div>
              <div className="status">
                <span className="status-item">{status}</span>
              </div>
            </div>
            <button onClick={()=>{handleDeleteOrder(_id)}} type="button" class="btn btn-danger">
              Delete Order
            </button>
          </div>
        </div>
      </div>
    );
};

export default Order;