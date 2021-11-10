import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const {error, isLoading, loginUser } = useAuth();

    const onSubmit = (data) => {
      loginUser(data.email, data.password);
      reset();
    }

    return (
      <div className="border border-1 mx-auto mt-5 mb-5 login-form">
        <h2 className="mt-4 text-primary"> Please Login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column  p-5 mx-auto"
        >
          <label className="label-title text-primary">Email Address</label>
          <input
            className="mb-4 input-items"
            type="email"
            {...register("email")}
          />
          <label className="label-title text-primary">Password</label>
          <input
            className="mb-4 input-items"
            type="password"
            {...register("password")}
          />
          <input className="submit-btn" type="submit" />
        </form>
        {isLoading && (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="mb-5">
          <h3>Don't Have An Account</h3>
          <Link to="./register">
            <Button className="w-75 mt-4 p-2" variant="secondary">
              CREATE AN ACCOUNT
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default Login;