import React, { useState } from 'react';
import EnrollForm from './EnrollForm';
import '../CSS/CourseCard.css';

function CourseCard({ title, image, category, level, description }) {
    const [showEnroll, setShowEnroll] = useState(false);

    return (
        <>
            <div className="course-card">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Level:</strong> {level}</p>
                <p>{description}</p>
                <button className="enroll-btn" onClick={() => setShowEnroll(true)}>Enroll Now</button>
            </div>

            {showEnroll && (
                <EnrollForm courseName={title} onClose={() => setShowEnroll(false)} />
            )}
        </>
    );
}

export default CourseCard;
