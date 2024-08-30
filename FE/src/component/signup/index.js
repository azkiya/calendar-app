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

        const navigate = useNavigate();

        const handleSubmit = async (e) => {
                e.preventDefault();

        }

        return (
                <div className="signup-container">
                        <div className="signup-form-continer">
                                <div className="left">
                                        <Link to="/login">
                                                <button type="button" className="whit-btn">
                                                        Sign In
                                                </button>
                                        </Link>

                                </div>
                                <div className="right">
                                        <form className="form-container" onSubmit={handleSubmit}>
                                                <h1> Create Account </h1>
                                                <input
                                                        type="text"
                                                        placeholder="Insert your name"
                                                        name="name"
                                                        onChange={(e) => setData.name(e.target.value)}
                                                        value={data.name}
                                                        required
                                                        className="input"
                                                />
                                                <input
                                                        type="email"
                                                        placeholder="Insert your email"
                                                        name="email"
                                                        onChange={(e) => setData.email(e.target.value)}
                                                        value={data.email}
                                                        required
                                                        className="input"
                                                />
                                                <input
                                                        type="password"
                                                        placeholder="Insert your password"
                                                        name="password"
                                                        onChange={(e) => setData.password(e.target.value)}
                                                        value={data.password}
                                                        required
                                                        className="input"
                                                />

                                                <button type="submit" className="green-btn">
                                                        Sign Up
                                                </button>

                                        </form>
                                </div>

                        </div>
                </div>
        )
}