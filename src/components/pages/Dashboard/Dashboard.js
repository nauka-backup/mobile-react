import React, { useState } from 'react';
import { FcDocument } from 'react-icons/fc';
import { RiPhoneLockLine } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import './Dashboard.css';
import { useAuth } from '../../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('');
        try {
            await logout();
            history.push('/login');
        } catch {
            setError('failed to logout');
        }
    }

    return (
        <section className="hero">
            <nav className="hero-nav">
                <h1 className="hero-title">Welcome {currentUser.email}</h1>
                {error && <div>{error}</div>}
                <button className="btn btn-outline" onClick={handleLogout}>
                    logout
                </button>
            </nav>

            <div className="user-info">
                <div>
                    <p>
                        <strong>Email: </strong>
                        {currentUser.email}{' '}
                    </p>
                </div>

                <div className="user-update">
                    <span>
                        <Link to="/update-profile">update profile</Link>
                    </span>
                </div>
            </div>

            <section className="user-icons">
                <div>
                    <FcDocument />
                    <a href="/" className="user-text">
                        Documents
                    </a>
                </div>
                <div>
                    <RiPhoneLockLine />
                    <a href="/" className="user-text">
                        My services
                    </a>
                </div>
                <div>
                    <AiFillSetting />
                    <a href="/" className="user-text">
                        Settings
                    </a>
                </div>
            </section>
        </section>
    );
};

export default Dashboard;
