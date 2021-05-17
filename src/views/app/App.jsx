import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { Header } from '../header/Header';
import { NormalView } from '../normal/Normal';
import { FixedView } from '../fixed/Fixed';
import history from '../../helpers/history';

export const App = () => {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Redirect exact from="/" to="/exercise1"></Redirect>
                <Route path="/exercise1">
                    <NormalView />
                </Route>
                <Route path="/exercise2">
                    <FixedView />
                </Route>
            </Switch>
        </Router>
    );
};
