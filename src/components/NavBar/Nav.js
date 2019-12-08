
import { BrowserRouter, Route, Link } from "react-router-dom";


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="louis">
      <Navbar color="black" light expand="lg">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link to ="/">Home</Link>
            </NavItem>
            
            <NavItem>
                
                <Link to ="/formulaire">Formulaire</Link>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;