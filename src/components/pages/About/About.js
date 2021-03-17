import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-wrapper">
            <div className="about-container">
                <h1 className="about-title">About the company</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                </p>
            </div>

            <div className="img-container">
                <img
                    src="./mobile-react/images/pexels-buro-millennial-1438072.jpg"
                    alt="team work"
                />
            </div>
        </section>
    );
};

export default About;
