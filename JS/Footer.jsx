import React from 'react';
import '../CSS/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <h3>LearnHub</h3>
                <p>Empowering your future with the best online courses.</p>

                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">Courses</a>
                    <a href="#">AboutUs</a>
                    <a href="#">Contact</a>
                </div>

                <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaWhatsapp /></a>
                </div>

                <p className="copyright">© 2025 LearnHub. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
