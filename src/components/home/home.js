import React from 'react';
import './home.css';
import Widget1 from '../widget1/widget1';
import Widget2 from '../widget2/widget2';
import Widget3 from '../widget3/widget3';
import Widget4 from '../widget4/Widget4';
import Widget5 from '../widget5/Widget5';
import Widget6 from '../widget6/Widget6';


import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button, Col, Row } from 'reactstrap';


class NavBar extends React.Component {
    render() {
        return (
            <div >
                <Row>
                    <Col xs="2" sm="2" md="2" lg="2">
                        <Button outline color="White" onClick={this.props.onClick} size="lg" style={{ backgroundColor: "#941701", color: "white" }}>{this.props.nom}</Button>{' '}
                    </Col>
                </Row>
            </div>
            <h1>test</h1>


        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: [
                {
                    nom: "Widget 1",
                    graph: <Widget1 />,

                },
                {
                    nom: "Widget 2",
                    graph: <Widget2 />,

                },
                {
                    nom: "Widget 3",
                    graph: <Widget3 />,

                },
                {
                    nom: "Widget 4",
                    graph: <Widget4 />,

                },
                {
                    nom: "Widget 5",
                    graph: <Widget5 />,

                },
                {
                    nom: "Widget 6",
                    graph: <Widget6 />,

                },



            ],
            show_profile: 0
        };
    }

    handleClick(i) {
        this.setState({ show_profile: i })
    }



    render() {
        return (
            <body className="Container">
                <header>
                    <Row>
                        <Col xs="12"  >
                            <div className="navbar1">DASHBOARD POUR CAPTEURS DANS UNE MAISON</div>
                        </Col>
                    </Row>

                    <nav className="navbar">

                        <NavBar
                            nom={this.state.profile[0].nom}
                            onClick={() => this.handleClick(0)} />
                        <NavBar
                            nom={this.state.profile[1].nom}
                            onClick={() => this.handleClick(1)} />
                        <NavBar
                            nom={this.state.profile[2].nom}
                            onClick={() => this.handleClick(2)} />
                        <NavBar
                            nom={this.state.profile[3].nom}
                            onClick={() => this.handleClick(3)} />

                        <NavBar
                            nom={this.state.profile[4].nom}
                            onClick={() => this.handleClick(4)} />
                        <NavBar
                            nom={this.state.profile[5].nom}
                            onClick={() => this.handleClick(5)} />
                        
                    </nav>

                </header>
                <div className="body">
                    <div className="profile">
                        <Profile
                            
                            graph={this.state.profile[this.state.show_profile].graph}
                        />
                    </div>
                    <div className="basdepage">
                        <Row>
                            <Col xs="6" sm="4">
                                <div className="titre">Humidité et Température en fonction des utilisateurs</div>
                                <Widget1 /></Col>
                            <Col xs="6" sm="3">
                                <div className="titre">Nombre de capteurs en fonction des différents paramètres</div>
                                <Widget2 /></Col>
                            <Col sm="5">
                                <div className="titre">Moyenne Température en fonction du nombre personnes présentes </div>
                                <Widget3 /></Col>
                        </Row>

                        <Row>
                            <Col xs="6" sm="4">
                                <div className="titre">Nombre d'utilisateurs par pays </div>
                                <Widget4 /></Col>
                            <Col xs="6" sm="4">
                                <div className="titre">Nombre de capteurs en fonctions des différentes pièces </div>
                                <Widget5 /></Col>
                            <Col sm="4">
                                <div className="titre">Pollution de l'air en fonction du pays</div>
                                <Widget6 /></Col>
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
        return (
            <div className="cadre" >
                <div className="Biographie">
                    <a>{this.props.nom}</a>
                    <a>{this.props.graph}</a>


                </div>

            </div>
        );
    }

}
export default Home;