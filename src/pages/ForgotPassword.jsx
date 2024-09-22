import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/forgot-password/', { email }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Failed to send reset link.');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
