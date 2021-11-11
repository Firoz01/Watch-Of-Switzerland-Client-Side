import React from 'react';
import './Order.css'
const Order = ({ order }) => {
    const { title, price, status} = order;
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
            <button type="button" class="btn btn-danger">
              Delete Order
            </button>
          </div>
        </div>
      </div>
    );
};

export default Order;