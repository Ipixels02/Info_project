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

import {
    Desktop, Tablet, Mobile
} from "./components/ResponsibleComponents";
import {useMediaQuery} from "react-responsive";
import {MainContent} from './components/mainContent';


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
                <div className={"header_navigation"}>
                    <a href="#" className="navbar-brand logo">
                        <img className="logo" alt="logo" style={{width: "60px"}} src="logo512.png"/>
                    </a>
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
                            <Button style={{marginLeft: "30px", marginRight: "30px"}} color="cyan"><Icon
                                icon="avatar"/> Личный кабинет</Button>
                        </div>
                    </div>}
                    {isTabletOrMobile && <div>
                        <Button onClick={() => {
                            setOpenNav(!isOpenNav)
                        }}>
                            <Icon icon="bars" size={"2x"}/>
                        </Button>
                    </div>}
                </div>
            </Header>
            <Content>
                <Switch>
                    <Route exact path={"/"}>
                        <MainContent/>
                    </Route>
                    <Route exact path={"/about"}>
                        <h1>here about</h1>
                    </Route>
                    <Route exact path={"/risks"}>
                        <h1>here risks</h1>
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
