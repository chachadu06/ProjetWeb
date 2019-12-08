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
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
            
          </div>
          
          
          
          
          
         
       </div>  
         
        </body>
    );
  }
  

  
}







export default Formulaire;

