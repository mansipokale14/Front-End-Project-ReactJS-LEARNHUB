import React, { useState } from 'react';
import CourseCard from './CourseCard';
import Footer from './Footer';
import Header from './Header';
import '../CSS/Course.css';

// Images
import htmlImg from '../IMAGE/html.png';
import pythonImg from '../IMAGE/python.jpg';
import dsImg from '../IMAGE/ds.jpg';
import reactImg from '../IMAGE/react.jpg';
import mlImg from '../IMAGE/ml.png';
import javaImg from '../IMAGE/java.jpg';
import bootstrapImg from "../IMAGE/bootstrap.png";
import advancedJavaImg from '../IMAGE/advancedjava.png';
import powerbiImg from '../IMAGE/powerbi.jpg';
import dsaImg from '../IMAGE/dsa.jpg';

const courseList = [
    { title: 'Core Java', image: javaImg, category: 'Programming', level: 'Intermediate', description: 'Master OOP and Java basics.' },
    { title: 'React for Beginners', image: reactImg, category: 'Frontend', level: 'Beginner', description: 'Learn to build UI with React.' },
    { title: 'Python Basics', image: pythonImg, category: 'Programming', level: 'Beginner', description: 'Start programming with Python.' },
    { title: 'HTML, CSS & JS Mastery', image: htmlImg, category: 'Frontend', level: 'Beginner', description: 'Master the core of web development.' },
    { title: 'Data Science Bootcamp', image: dsImg, category: 'Data Science', level: 'Advanced', description: 'Master data analysis and ML tools.' },
    { title: 'Machine Learning', image: mlImg, category: 'AI/ML', level: 'Intermediate', description: 'Build and train ML models.' },
    { title: 'Bootstrap Essentials', image: bootstrapImg, category: 'Frontend', level: 'Beginner', description: 'Build responsive websites using Bootstrap.' },
    { title: 'Advanced Java', image: advancedJavaImg, category: 'Programming', level: 'Advanced', description: 'Learn servlets, JSP, JDBC and more.' },
    { title: 'Power BI for Data Analytics', image: powerbiImg, category: 'Data Science', level: 'Intermediate', description: 'Visualize and analyze data using Power BI.' },
    { title: 'Data Structures & Algorithms', image: dsaImg, category: 'Programming', level: 'Intermediate', description: 'Master arrays, trees, graphs and algorithms.' }
];

function CoursePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');

    const filteredCourses = courseList.filter(course =>
        (category === 'All' || course.category === category) &&
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />

            <div className="homepage-container">

                {/* Greeting Section */}
                <div className="greeting-container">
                    <h1 className="welcome-heading">
                        Explore <span className="highlight">Courses</span>
                    </h1>
                    <p className="sub-heading">Browse and enroll in our available online courses</p>
                </div>

                {/* Search & Filter Bar */}
                <div className="search-filter-bar">
                    <input
                        type="text"
                        placeholder="Search courses by name..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <select onChange={(e) => setCategory(e.target.value)} className="filter-select">
                        <option value="All">All Categories</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Programming">Programming</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Data Science">Data Science</option>
                    </select>
                </div>

                {/* Course Cards */}
                <div className="course-card-container">
                    {filteredCourses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>

            </div>

            <Footer />
        </>
    );
}

export default CoursePage;
