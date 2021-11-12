import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./OrderNow.css";
import { Col, Container, Row } from "react-bootstrap";
import useAlert from "../../Hooks/useAlert";

const OrderNow = () => {
  const [item, setItem] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const { user, handleSweetAlert } = useAuth();

  const { confirmations } = useAlert();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => { confirmations(); });

    reset();
  };

  const { title, price, description, image } = item;

  return (
    <Container className="mb-5">
      <h2 className="text-primary mt-3">Please fillup the form</h2>
      <Row className="align-items-center justify-content-center">
        <Col sx={12} lg={6} className="">
          <div>
            <div>
              <img className="w-75" src={image} alt="" />
            </div>
            <div>
              <h3>{title}</h3>
              <h3>{price} Tk</h3>
              <p>{description}</p>
            </div>
          </div>
        </Col>

        <Col sx={12} lg={6}>
          <div className="mx-auto mt-5">
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
              {user.displayName && (
                <input defaultValue={user.displayName} {...register("name")} />
              )}

              {user.email && (
                <input
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
              )}
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <fieldset disabled>
                {title && <input defaultValue={title} {...register("title")} />}
              </fieldset>
              <fieldset disabled>
                {price && <input defaultValue={price} {...register("price")} />}
              </fieldset>
              <input
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <input className="bg-secondary text-white" type="submit" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderNow;
