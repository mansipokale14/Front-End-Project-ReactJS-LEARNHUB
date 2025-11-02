import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
    return (
        <header className="main-header">
            <div className="logo">LearnHub</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About</Link>
                <Link to="/login" className="login-btn">Login</Link>
            </nav>
        </header>
    );
}

export default Header;
