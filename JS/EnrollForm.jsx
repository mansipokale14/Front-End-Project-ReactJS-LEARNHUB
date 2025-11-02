import React, { useState } from 'react';
import '../CSS/EnrollForm.css';

function EnrollForm({ courseName, onClose }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="enroll-modal">
            <div className="enroll-content">
                {!isSubmitted ? (
                    <>
                        <h2>Enroll in {courseName}</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Contact Number" required />
                            <button type="submit">Submit</button>
                            <button type="button" className="close-btn" onClick={onClose}>Close</button>
                        </form>
                    </>
                ) : (
                    <div className="thank-you">
                        <h2>Thank You for Enrolling!</h2>
                        <p>We will contact you soon regarding {courseName}.</p>
                        <button onClick={onClose}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EnrollForm;
