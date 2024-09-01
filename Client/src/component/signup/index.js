import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './signup.css';

export default function Signup() {
        const [data, setData] = useState({
                name: "",
                email: "",
                password: ""
        });
        const [errorMessage, setErrorMessage] = useState('');
        const navigate = useNavigate();

        const handleChange = (e) => {
                const { name, value } = e.target;

                setData(prevData => ({
                        ...prevData,
                        [name]: value
                }));
        };


        const handleRegister = (e) => {
                e.preventDefault();
                axios.post('http://localhost:4000/api/register', data)
                        .then(response => {
                                navigate('/login')
                        })
                        .catch(error => {
                                setErrorMessage('Failed to register: ' + error.response.data.error)
                        })
        }

        return (
                <div className="signup-container">
                        <div className="signup-form-container">
                                <div className="signup-left">
                                        <h1>Welcome Back</h1>
                                        <Link to="/login">
                                                <button type="button" className="white-btn">
                                                        Sign In
                                                </button>
                                        </Link>

                                </div>
                                <div className="signup-right">
                                        <form className="form-container" onSubmit={handleRegister}>
                                                <h1> Create Account </h1>
                                                <input
                                                        type="text"
                                                        placeholder="Insert your name"
                                                        name="name"
                                                        onChange={handleChange}
                                                        value={data.name}
                                                        required
                                                        className="input"
                                                />
                                                <input
                                                        type="email"
                                                        placeholder="Insert your email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        value={data.email}
                                                        required
                                                        className="input"
                                                />
                                                <input
                                                        type="password"
                                                        placeholder="Insert your password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        value={data.password}
                                                        required
                                                        className="input"
                                                />
                                                {errorMessage && <div className="error-message">{errorMessage}</div>}
                                                <button type="submit" className="blue-btn">
                                                        Sign Up
                                                </button>

                                        </form>
                                </div>

                        </div>
                </div>
        )
}