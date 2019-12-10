import React from "react";
import Popup from "reactjs-popup";
import "./formulaire.css"
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
          



import { BrowserRouter, Route, Link } from "react-router-dom";





class NavBar extends React.Component {
  render() {
      return(
          <div >
            <Button outline color="White" onClick={this.props.onClick} size="lg" style={{backgroundColor:"#941701",color: "white"}}>{this.props.nom}</Button>{' '}
         
        </div>
          
          
      );
  }
}



class Formulaire extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Client bien enregistré : ' + this.state.value);
    event.preventDefault();
  }

  handleChange_location = (event) => {
    this.setState({location: event.target.value});
  }
  handleChange_nbpersonne = (event) => {
    this.setState({nbpersonne: event.target.value});
  }
  handleChange_taille = (event) => {
    this.setState({taille: event.target.value});
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
            
            
          </header>
          <div className="body">
          <div className="profile">
            
          <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="localisation">Localisation</Label>
            <Input type="text" name="localisation" id="localisation" placeholder="localisation" onChange={this.handleChange_location} />
          </FormGroup>
        </Col> 
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="nbperonne">Nombre de personne dans la maison</Label>
            <Input type="text" name="nbpersonne" id="nbpersonne" placeholder="Nombre de personne dans la maison" onChange={this.handleChange_nbpersonne} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
      <FormGroup>
        <Label for="taille">Taille de la maison</Label>
        <Input type="text" name="taille" id="taille" placeholder="Taille de la maison" onChange={this.handleChange_taille}/>
      </FormGroup>
      </Col>
      </Row>
      <Button>Ajouter</Button>
    </Form>
            
          </div>
          
          
          
          
          
         
       </div>  
         
        </body>
    );
  }
  

  
}







export default Formulaire;

