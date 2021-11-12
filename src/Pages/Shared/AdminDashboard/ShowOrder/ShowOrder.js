import React from "react";
import './ShowOrder.css'
const ShowOrder = (props) => {
    const {_id, name, email, phone, title, status } = props.order;
    

  let count = 0;

  return (
    <tr>
      <td>{count++}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{title}</td>
          <td className={
            status === 'pending' ? 'pending' : 'shipped'
      }>
        <button
          onClick={() => {
            props.handleOrderStatus(_id , status);
          }}
        >
          {status}
        </button>
      </td>
      <td class="delete-btn">
        <button
          onClick={() => {
            props.handleDeleteOrder(_id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShowOrder;
