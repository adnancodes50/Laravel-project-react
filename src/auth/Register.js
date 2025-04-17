import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import api from '../utlis/axios';
import Navbars from '../components/Navbar';
import Footer from '../products/Footer';

const Register = () => {
    const navigate = useNavigate(); // ✅ Initialize useNavigate

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post('/register', formData);
            console.log('Registration successful', response.data);
            navigate('/login'); // ✅ Redirect to login page
        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Registration failed:', error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='container border-bottom'><Navbars /></div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <h2 className="text-center mt-3">Register</h2>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.first_name && <div className="text-danger">{errors.first_name[0]}</div>}
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.last_name && <div className="text-danger">{errors.last_name[0]}</div>}
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <div className="text-danger">{errors.email[0]}</div>}
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone_number && <div className="text-danger">{errors.phone_number[0]}</div>}
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.password && <div className="text-danger">{errors.password[0]}</div>}
                                </div>

                                <button
                                    type="submit"
                                    className="btn w-100"
                                    style={{ backgroundColor: "coral", color: "white" }}
                                    disabled={loading}
                                >
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            </form>

                            <div className="mt-2 text-center">
                                <p>Already have an account? <a href="/login">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'><Footer /></div>
        </div>
    );
};

export default Register;
