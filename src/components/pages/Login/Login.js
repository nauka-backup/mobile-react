import React, { useRef, useState } from 'react';
import '../Register/Register.css';
import { useAuth } from '../../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/user');
        } catch {
            setError('Failed to log in');
        }
        setLoading(false);
    }

    return (
        <>
            <section className="signup-wrapper">
                <div className="card-container">
                    <section className="registerContainer">
                        <form className="register" onSubmit={handleSubmit}>
                            <h1 className="card-title">Log to account</h1>
                            {error && (
                                <div className="error-message">{error}</div>
                            )}
                            <label>Email: </label>
                            <input type="email" required ref={emailRef} />

                            <label>Password: </label>
                            <input type="password" required ref={passwordRef} />

                            <div className="reset-password">
                                <Link to="/forgot-password">
                                    forgot password?
                                </Link>
                            </div>

                            <div className="btnContainer">
                                <button
                                    type="submit"
                                    className="btn btn-outline"
                                >
                                    Login
                                </button>

                                <p>
                                    Don't have an account?:
                                    <span>
                                        <Link to="/register">Sign up</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </section>

                    <GoogleLogin />

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
export default Login;
