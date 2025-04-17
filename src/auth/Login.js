import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import Navbars from '../components/Navbar';
import Footer from '../products/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate(); // ✅ Init

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.post('/api/login', {
        email: form.email,
        password: form.password,
      });

      if (response.data.status) {
        alert('Logged in successfully!');
        navigate('/'); // ✅ Redirect to your dashboard or homepage
      } else {
        alert('Login failed.');
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('Login failed. Check the console.');
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className='container border-bottom'><Navbars /></div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <h2 className="text-center mt-3 text-warning">Login</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="text-danger">{errors.email[0]}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && <div className="text-danger">{errors.password[0]}</div>}
                </div>
                <button type="submit" className="btn w-100 btn-warning" style={{ backgroundColor: "coral", color: "white" }}>
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                <p>Don't have an account? <a href="/register">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'><Footer /></div>
    </div>
  );
};

export default Login;
