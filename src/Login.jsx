import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const apiUrl = import.meta.env.VITE_PRODUCTS_API 
  
  const navigate=useNavigate()
  const checkLogin = (data) => {
    console.log('Form data', data);
    axios
      .post(`${apiUrl}/users/login`, data)
      .then((response) => {
        console.log(response.data);
        onLogin()
        navigate('/products')
      })
      .catch((error) => {
       console.log(error)
      });
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <form onSubmit={handleSubmit(checkLogin)} className="border p-4 shadow-sm rounded w-50">
        <h2 className="text-center mb-4">Login Form</h2>

       
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary btn-sm w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
