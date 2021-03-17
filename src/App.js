import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/pages/About/About';
import ServicesList from './components/pages/ServicesList/ServicesList';
import ProductsList from './components/pages/ProductsList/ProductsList';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/pages/UpdateProfile/UpdateProfile';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <PrivateRoute exact path="/user" component={Dashboard} />
                    <PrivateRoute
                        path="/update-profile"
                        component={UpdateProfile}
                    />

                    <Route path="/about" component={About} />
                    <Route path="/services-list" component={ServicesList} />
                    <Route path="/products-list" component={ProductsList} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
