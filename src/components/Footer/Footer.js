import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { WiStars } from 'react-icons/wi';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About company</h2>
                        <Link to="/">About Company</Link>
                        <Link to="/">Price list and documents</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact for more</h2>
                        <Link to="/">Customer Support</Link>
                        <Link to="/">My Ico Mobile</Link>
                        <Link to="/">Payments / Invoice</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <WiStars className="navbar-icon" />
                            ICO MOBILE
                        </Link>
                    </div>
                    <small className="website-rights"> ICO MOBILE © 2021</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;
