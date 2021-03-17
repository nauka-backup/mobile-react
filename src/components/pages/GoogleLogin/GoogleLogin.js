import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import './GoogleLogin.css';

class GoogleLogin extends React.Component {
    state = { isSignedIn: false };
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccess: () => false,
        },
    };

    onLogout = () => {
        firebase.auth().signOut();
        this.setState({
            isSignedIn: false,
        });
    };
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user });
        });
    };

    render() {
        return (
            <div className="google-login">
                {this.state.isSignedIn ? (
                    <>
                        <div className="login-title">you are Signed In!</div>
                        <button className="btn-google">
                            <Link to="/user">go to your profile</Link>
                        </button>
                        <button className="btn-logout" onClick={this.onLogout}>
                            log out
                        </button>
                    </>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        );
    }
}

export default GoogleLogin;
