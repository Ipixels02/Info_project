import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button,
    Container,
    Header,
    Nav,
    Navbar,
    Content,
    Footer,
    Icon,
    Grid,
    Row,
    Dropdown,
    InputGroup,
    Input,
    Sidebar,
    Sidenav,
    FlexboxGrid, Col
} from 'rsuite';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {
    Desktop, Tablet, Mobile
} from "./components/ResponsibleComponents";
import {useMediaQuery} from "react-responsive";


function App() {
  const [isOpenNav, setOpenNav] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobileOpenNav = !isTabletOrMobile || isTabletOrMobile && isOpenNav;

  return (
            <Router>
                <Header className={"Header"}>
                        <div style={{width: "100%"}}>
                                <div >
                                    <a href="#" className="navbar-brand logo">
                                        <img className="logo" alt="logo" style={{width: "60px"}} src="logo512.png"/>
                                    </a>
                                </div>
                            {isMobileOpenNav && <div className="responsive-navbar-nav">
                                    <Nav vertical={isTabletOrMobile} className="mr-auto">
                                        <Nav.Item eventKey="home" href="/home">Главная</Nav.Item>
                                        <Nav.Item href="/about">О нас</Nav.Item>
                                        <Nav.Item href="/projects">Предлагаемые проекты</Nav.Item>
                                        <Nav.Item href="/risks">Риски</Nav.Item>
                                        <Nav.Item href="/guarantees">Гарантии</Nav.Item>
                                        <Nav.Item href="/contacts">Контакты</Nav.Item>
                                    </Nav>
                                    <Nav pullRight>
                                        <Nav.Item icon={<Icon icon="avatar" />}>Личный кабинет</Nav.Item>
                                    </Nav>
                                </div>}
                            {isTabletOrMobile && <div >
                                <Button onClick={()=>{setOpenNav(!isOpenNav)}}>
                                    <Icon icon="bars" size={"2x"} />
                                </Button>
                            </div>}
                        </div>
                </Header>
                <Content style={{height:"1000px"}}>
                    <Grid fluid={true}>
                        <Row>
                            <div>
                                <FlexboxGrid justify="center">
                                    <FlexboxGrid.Item
                                        style={{minHeight: window.innerHeight - 76, width: "88%"}}
                                        colspan={16}>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </div>
                        </Row>
                    </Grid>
                </Content>
                <Footer>
                    <Row>
                        <div className={"site-copy"}>
                            <p>
                                Copyright © 2021 InProject.
                            </p>
                        </div>
                    </Row>
                </Footer>
            </Router>
        );
}



export default App;
