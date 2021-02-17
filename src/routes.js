import React from 'react';
import {
    Route as Route,
    Switch as Swtich } from 'react-router-dom';
import LandingPage from './components/LandingPage';


    export default  (
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path="" component={TopHeader}/>
            <Route path="" component={VirGalOne}/>
        </Switch>
    )




