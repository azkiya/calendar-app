import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './login.css';

export default function Signup() {
        const [data, setData] = useState({
                email: "",
                password: ""
        });
        const [errorMessage, setErrorMessage] = useState('');

        const handleChange = (e) => {
                const { name, value } = e.target;

                setData(prevData => ({
                        ...prevData,
                        [name]: value
                }));
        };
        const handleLogin = (e) => {
                e.preventDefault();
                axios.post('http://localhost:4000/api/login', data)
                        .then(response => {
                                localStorage.setItem("token", response.data.data.token)
                                window.location = "/"
                        })
                        .catch(error => {
                                setErrorMessage('Failed login: ' + error.response.data.message)
                        })
        }

        return (
                <div className="login-container">
                        <div className="login-form-container">
                                <div className="left">
                                        <form className="form-container" onSubmit={handleLogin}>
                                                <h1> Login to Your Account </h1>
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
                                                        Sign In
                                                </button>

                                        </form>
                                </div>
                                <div className="right">
                                        <h1>New Here ?</h1>
                                        <Link to="/signup">
                                                <button type="button" className="white-btn">
                                                        Sign Up
                                                </button>
                                        </Link>

                                </div>

                        </div>
                </div>
        )
}