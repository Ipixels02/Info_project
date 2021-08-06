// import 'rsuite/dist/styles/rsuite-default.css';
import './customTheme.css'
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
    FlexboxGrid, Col, ButtonToolbar
} from 'rsuite';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link, useHistory, useLocation
} from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import {
    Desktop, Tablet, Mobile
} from "./components/ResponsibleComponents";
import {useMediaQuery} from "react-responsive";

import {MainContent} from './components/mainContent';
import {AboutUsPage} from './components/AboutUsPage';
import {RisksPage} from './components/RisksPage';


function App() {
    const [isOpenNav, setOpenNav] = useState(false);
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    const isMobileOpenNav = !isTabletOrMobile || isTabletOrMobile && isOpenNav;
    let location = useLocation();
    const detActiveTab = (pageName: string): boolean => {
        return location.pathname == pageName;
    }
    return (
        <>
            <Header className={"Header"}>
                <a href="#" className="navbar-brand logo">
                    <img className="logo" alt="logo" style={{width: "60px"}} src="logo512.png"/>
                </a>
                <div style={{position: isTabletOrMobile && isOpenNav ? "fixed" : undefined}} className={"header_navigation"}>

                    {isTabletOrMobile && <div className={"mobileIcon"}>
                        <Hamburger toggled={isOpenNav} toggle={() => {
                            setOpenNav(!isOpenNav)
                        }}/>
                    </div>}
                    {isMobileOpenNav && <div className="responsive-navbar-nav">
                        <div className="nav_items">
                            <Nav appearance="subtle" vertical={isTabletOrMobile}>
                                <Link to={"/"}><Nav.Item
                                    active={detActiveTab("/")}><span>Главная</span></Nav.Item></Link>
                                <Link to={"/about"}><Nav.Item
                                    active={detActiveTab("/about")}><span>О нас</span></Nav.Item></Link>
                                {/*<Nav.Item href="/projects">Предлагаемые проекты</Nav.Item>*/}
                                <Link to={"/risks"}><Nav.Item
                                    active={detActiveTab("/risks")}><span>Риски</span></Nav.Item></Link>
                                <Link to={"/guarantees"}><Nav.Item active={detActiveTab("/guarantees")}
                                                                   eventKey={"/guarantees"}><span>Гарантии</span></Nav.Item></Link>
                                <Link to={"/contacts"}><Nav.Item active={detActiveTab("/contacts")}
                                                                 eventKey={"/contacts"}><span>Контакты</span></Nav.Item></Link>
                            </Nav>
                            <Button className={"buttonPersonalArea"} color="cyan"><Icon
                                icon="avatar"/> Личный кабинет</Button>
                        </div>
                    </div>}
                </div>
            </Header>
            <Content>
                <Switch>
                    <Route exact path={"/"}>
                        <MainContent/>
                    </Route>
                    <Route exact path={"/about"}>
                        <AboutUsPage/>
                    </Route>
                    <Route exact path={"/risks"}>
                        <RisksPage/>
                    </Route>
                    <Route exact path={"/guarantees"}>
                        <h1>here guarantees</h1>
                    </Route>
                    <Route exact path={"/contacts"}>
                        <h1>here contacts</h1>
                    </Route>
                </Switch>
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
        </>
    );
}


export default App;
