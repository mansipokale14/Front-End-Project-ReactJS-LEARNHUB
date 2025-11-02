import React, { useState } from 'react';
import '../CSS/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Trim inputs to avoid extra spaces
        if (email.trim() === 'user@example.com' && password.trim() === 'password') {
            alert('Login Successful! Redirecting to Courses...');
            navigate('/courses');
        } else {
            alert('Invalid credentials! Try user@example.com / password');
        }
    };

    return (
        <div className="login-container">
            <h2>Welcome Back to LearnHub</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p className="info-text">Demo Login: user@example.com / password</p>
        </div>
    );
}

export default Login;
