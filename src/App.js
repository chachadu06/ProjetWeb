import React, {Components} from 'react';

import Routes from './route';
import Example from './components/NavBar/Nav';
import axios from 'axios';
const APIURL= 'http://localhost:3000';
//const APIURL= 'http://localhost:3000/api';
// class Essaie extends Components{
// componentDidMount() {
//   axios.get('http://localhost:3000/users')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

// componentDidMount() {
//   axios.get('http://localhost:3000/measures')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

// componentDidMount() ;{
//    axios.get(`http://localhost:3000/sensors`)
//    .then(response => {
//     console.log(response.data);
//    })
//    .catch(error => {
//      console.log(error);
//    });
// }
 
 


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

