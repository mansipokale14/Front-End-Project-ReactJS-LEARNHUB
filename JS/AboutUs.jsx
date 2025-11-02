import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../CSS/AboutUs.css';

function AboutUs() {
    return (
        <>
            <Header />
            <div className="about-container">
                <h1 className="about-heading">About <span>LearnHub</span></h1>
                <p className="about-subheading">Empowering learners through technology & quality education</p>

                <div className="about-content">
                    <p>
                        LearnHub is a modern online learning platform designed to make education accessible, flexible, and engaging.
                        We offer a wide range of courses in programming, data science, AI, frontend development, and more.
                        Our mission is to bridge the gap between academic knowledge and real-world skills.
                    </p>

                    <p>
                        With LearnHub, you get:
                    </p>

                    <ul>
                        <li>🎓 Expert-led online courses</li>
                        <li>🕒 Flexible learning schedules</li>
                        <li>📱 Accessible anytime, anywhere</li>
                        <li>📊 Practical projects & hands-on experience</li>
                        <li>💬 Community support and mentorship</li>
                    </ul>

                    <p className="thank-you">Thank you for choosing LearnHub as your learning partner!</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
