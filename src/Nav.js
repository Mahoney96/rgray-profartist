import React from 'react';
import {
    BrowserRouter as BrowserRouter, 
    Route as Route,
    Switch as Switch
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';

export default Nav (

        <BrowserRouter>
        <Switch>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/preferences">
                <Preferences/>
            </Route>
        </Switch>
        </BrowserRouter>
);