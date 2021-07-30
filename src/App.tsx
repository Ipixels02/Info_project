import './App.css';
import React, {useState, useEffect, useRef, FC} from 'react';
import {Button, Container, Nav, Navbar} from 'rsuite';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  const [s, setS] = useState(0)
  return (
            <Router>
                <Navbar >
                    <Container>
                        <Navbar.Header>
                            <a href="#" className="navbar-brand logo">
                                <img className="logo" alt="logo" style={{background: "#000"}} src="logo512.png"/>
                            </a>
                        </Navbar.Header>
                        <Navbar.Body id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Item href="/home">Главная</Nav.Item>
                                <Nav.Item href="/about">О нас</Nav.Item>
                                <Nav.Item href="/projects">Предлагаемые проекты</Nav.Item>
                                <Nav.Item href="/risks">Риски</Nav.Item>
                                <Nav.Item href="/guarantees">Гарантии</Nav.Item>
                                <Nav.Item href="/contacts">Контакты</Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </Container>
                </Navbar>
            </Router>
        );
}




export default App;
