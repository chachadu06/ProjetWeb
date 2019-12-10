import React from 'react';
import logo from './logo.svg';
import './App.css';
import Widget1 from './components/widget1/widget1';
import Widget2 from './components/widget2/widget2';
import Widget3 from './components/widget3/widget3';
import Widget4 from './components/widget4/Widget4';
import Widget5 from './components/widget5/Widget5';
import Widget6 from './components/widget6/Widget6';

import Formulaire from './components/formulaire/formulaire';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/home/home';
import Routes from './route';
import Example from './components/NavBar/Nav';


class Container extends React.Component{
  
  render() {
    return(
        

        <div>
           <Example/>
          <Routes/>
        </div>
    );
  }
}




export default Container;

