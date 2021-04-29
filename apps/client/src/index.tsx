import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import { store } from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                            <Redirect to="/login" />
                        )
                    }}
                />
                <Route path="/login" component={LoginPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);