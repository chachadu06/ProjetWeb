import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Formulaire from './components/formulaire/formulaire';


export default () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/admin" exact component={Formulaire}/>
        
    </Switch>
);