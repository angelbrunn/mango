import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { Home } from '../home/home';
import history from '../../helpers/history';

export const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Redirect exact from="/" to="/exercise1"></Redirect>
                <Route path="/exercise1">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};
