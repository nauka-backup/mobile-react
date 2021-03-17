import React, { useRef, useState } from 'react';
import '../Register/Register.css';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import '../../../App.css';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('check your inbox for the next move');
        } catch {
            setError('Failed to reset the password');
        }

        setLoading(false);
    }

    return (
        <>
            <section className="signup-wrapper ">
                <div className="card-container">
                    <section className="registerContainer">
                        <form className="register" onSubmit={handleSubmit}>
                            <h1 className="card-title">to reset password</h1>
                            {error && (
                                <div className="error-message">{error}</div>
                            )}
                            {message && (
                                <div className="error-success">{message}</div>
                            )}
                            <label>Email: </label>
                            <input type="email" required ref={emailRef} />

                            <div className="btnContainer">
                                <button
                                    type="submit"
                                    className="btn btn-outline"
                                >
                                    Reset Password
                                </button>

                                <div className="reset-password">
                                    <Link to="/login">go to login page</Link>
                                </div>

                                <p>
                                    Don't have an account?:
                                    <span>
                                        <Link to="/register">Sign up</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>
    );
}
