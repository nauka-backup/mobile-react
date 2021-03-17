import React, { useRef, useState } from 'react';
import './Register.css';
import { useAuth } from '../../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/user');
        } catch {
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    return (
        <>
            <section className="signup-wrapper">
                <div className="card-container">
                    <section className="registerContainer">
                        <form className="register" onSubmit={handleSubmit}>
                            <h1 className="card-title">Sign up now</h1>
                            {error && (
                                <div className="error-message">{error}</div>
                            )}
                            <label>Email: </label>
                            <input type="email" required ref={emailRef} />

                            <label>Password: </label>
                            <input type="password" required ref={passwordRef} />

                            <label>Password Confirmation: </label>
                            <input
                                type="password"
                                required
                                ref={passwordConfirmRef}
                            />

                            <div className="btnContainer">
                                <button
                                    type="submit"
                                    className="btn btn-outline"
                                >
                                    Register
                                </button>
                                <p>
                                    If you have an account:
                                    <span>
                                        <Link to="/login">Login</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </section>

                    <div className="card-image">
                        <img
                            src="./mobile-react/images/svg5-love.svg"
                            alt="woman with ballon"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
