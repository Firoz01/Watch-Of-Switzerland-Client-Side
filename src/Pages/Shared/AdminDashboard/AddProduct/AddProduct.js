import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddProduct.css";
import ShowProducts from "./ShowProducts";
const AddProduct = () => {

const [showProducts, setShowProducts] = useState([]);
const [loading, setLoading] = useState(false); 
  
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setShowProducts(data), setLoading(false));
  },[loading]);
  



   const handleDeleteOrder = (id) => {
     swal({
       title: "Are you sure to Delete?",
       text: "Once deleted, you will not be able to recover!",
       icon: "warning",
       buttons: true,
       dangerMode: true,
     }).then((willDelete) => {
       if (willDelete) {
         callDeleteApi();
         swal("Delete Confirm", {
           icon: "success",
         });
       } else {
         swal("Data Safe!");
       }
     });

     const callDeleteApi = () => {
       fetch(`http://localhost:5000/products/${id}`, {
         method: "DELETE",
         headers: {
           "Content-Type": "application/json",
         },
       })
         .then((res) => res.json())
         .then((data) => {
           if (data) {
             deleteConfirmation();
           }
         });
     };
   };

   const deleteConfirmation = () => {
     setLoading(true);
   };



   const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.acknowledged === true) {
          swal("Product Added Successfully");
          setLoading(true);
        }
      });
   };
  
  
  

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center container">
        <div className="my-5 message-box">
          <h2 className="text-secondary">Add New Product</h2>
          <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
            {<input placeholder="title" {...register("title")} />}

            {
              <input
                placeholder="price"
                {...register("price", { required: true })}
              />
            }

            <textarea
              placeholder="Type Image URL"
              defaultValue=""
              {...register("image")}
            />

            <input className="btn btn-secondary" type="submit" />
          </form>
        </div>
      </div>

      <h2>Products List</h2>
      <Table responsive bordered hover size="sm">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>price</th>
            <th>Image Url</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {showProducts.map((product) => (
            <ShowProducts
              key={product._id}
              product={product}
              handleDeleteOrder={handleDeleteOrder}
            ></ShowProducts>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AddProduct;



















