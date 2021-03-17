import React, { useRef, useState } from 'react';
import '../Register/Register.css';
import { useAuth } from '../../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        const promises = [];
        setLoading(true);
        setError('');

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }
        Promise.all(promises)
            .then(() => {
                history.push('/user');
            })
            .catch(() => {
                setError('failed to update');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <section className="signup-wrapper ">
                <div className="card-container">
                    <section className="registerContainer">
                        <form className="register" onSubmit={handleSubmit}>
                            <h1 className="card-title">Update Profile</h1>
                            {error && (
                                <div className="error-message">{error}</div>
                            )}
                            <label>Email: </label>
                            <input
                                type="email"
                                required
                                ref={emailRef}
                                defaultValue={currentUser.email}
                            />

                            <label>Password: </label>
                            <input
                                type="password"
                                ref={passwordRef}
                                placeholder="leave empty to keep the same"
                            />

                            <label>Password Confirmation: </label>
                            <input
                                type="password"
                                ref={passwordConfirmRef}
                                placeholder="leave empty to keep the same"
                            />

                            <div className="btnContainer">
                                <button
                                    type="submit"
                                    className="btn btn-outline"
                                >
                                    Update the profile
                                </button>
                                <p>
                                    <span>
                                        <Link to="/user">Cancel </Link>
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
