import React from 'react';
import logo from './logo.svg';
import './App.css';
import Widget1 from './components/widget1/widget1';
import Widget2 from './components/widget2/widget2';
import Widget3 from './components/widget3/widget3';
import Widget4 from './components/widget4/Widget4';
import Widget5 from './components/widget5/Widget5';
import Widget6 from './components/widget6/Widget6';
import Nav from './components/NavBar/Nav';


import { Button, Col, Row} from 'reactstrap';


class NavBar extends React.Component {
  render() {
      return(
          <div >
            <Button outline color="White" onClick={this.props.onClick} size="lg" style={{backgroundColor:"#941701",color: "white"}}>{this.props.nom}</Button>{' '}
         
        </div>
          
          
      );
  }
}



class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile : [
        {
          nom : "Humidité",
          graph:  <Widget1/>,
          
        },
        {
          nom : "Température",
          graph:  <Widget2/>,
          
        },
        {
          nom : "Pollution de l'air",
          graph:  <Widget3/>,
          
        },
        {
          nom : "Widget 4",
          graph:  <Widget4/>,
          
        },
        {
          nom : "Widget 5",
          graph:  <Widget5/>,
          
        },
        {
          nom : "Widget 6",
          graph:  <Widget6/>,
          
        },
        
          
        
      ],
      show_profile: 0
    };
  }

  handleClick(i){
      this.setState({show_profile: i})
  }

  

  render() {
    return(
        <body className="Container">
          <header>
            <Row>
              <Col xs="12"  >
              <div className="navbar1">DASHBOARD POUR CAPTEURS DANS UNE MAISON</div>
            </Col>
            </Row>
            <nav className="navbar">
              <Nav/>
              <NavBar
                  nom={this.state.profile[0].nom}
                  onClick={() => this.handleClick(0)}/>
              <NavBar
                  nom={this.state.profile[1].nom}
                  onClick={() => this.handleClick(1)}/>
              <NavBar
                  nom={this.state.profile[2].nom}
                  onClick={() => this.handleClick(2)}/>
              <NavBar
                  nom={this.state.profile[3].nom}
                  onClick={() => this.handleClick(3)}/>
              <NavBar
                  nom={this.state.profile[4].nom}
                  onClick={() => this.handleClick(4)}/>
              <NavBar
                  nom={this.state.profile[5].nom}
                  onClick={() => this.handleClick(5)}/>
            </nav>
            
          </header>
          <div className="body">
          <div className="profile">
            <Profile
                nom={this.state.profile[this.state.show_profile].nom}
                graph={this.state.profile[this.state.show_profile].graph}
            />
          </div>
          <div className="basdepage">
          <Row>
        <Col xs="6" sm="4">
          <div className="titre">Net Promoting Score</div>
          <Widget1/></Col>
        <Col xs="6" sm="3">
        <div className="titre">Satisfaction/Insatisfaction</div>
          <Widget2/></Col>
        <Col sm="5">
        <div className="titre">Qualité de la Consultation </div>
          <Widget3/></Col>
      </Row>
          
      <Row>
        <Col xs="6" sm="4">
        <div className="titre">Widget 4 </div>
          <Widget4/></Col>
        <Col xs="6" sm="4">
        <div className="titre">Widget 5 </div>
          <Widget5/></Col>
        <Col sm="4">
        <div className="titre">Widget 6</div>
          <Widget6/></Col>
      </Row>
          
          
          
          
         
       </div>  
       </div>   
        </body>
    );
  }
}

class Profile extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          bgColor: ""
      }
  }

    render() {
    return(
        <div className="cadre" >
            <div className="Biographie">
                <a>{this.props.nom}</a>
                <a>{this.props.graph}</a>
                
               
            </div>
            
        </div>
    );
}
  
}


export default Container;

