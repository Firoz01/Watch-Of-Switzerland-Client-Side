import React from 'react';

const ShowProducts = (props) => {
    const { _id, title, price, image } = props.product;
    return (
      <tr>
        <td>0</td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{image}</td>
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

export default ShowProducts;