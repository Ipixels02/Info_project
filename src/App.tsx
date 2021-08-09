import './customTheme.css'
import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button,
    Header,
    Nav,
    Content,
    Footer,
    Icon, Row, Col, Grid,
} from 'rsuite';
import {
    Switch,
    Route,
    Link, useHistory, useLocation
} from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import {useMediaQuery} from "react-responsive";

import {MainContentPage} from './ui/page/MainContentPage';
import {AboutUsPage} from './ui/page/AboutUsPage';
import {RisksPage} from './ui/page/RisksPage';
import {GuaranteesPage} from './ui/page/GuaranteesPage';
import {ContactPage} from './ui/page/ContactPage';

import {userHook} from "./api/UserApi";
import {PersonalAreaPage} from "./ui/page/PersonalAreaPage";


function App() {
    const [isOpenNav, setOpenNav] = useState(false);
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    const isMobileOpenNav = !isTabletOrMobile || isTabletOrMobile && isOpenNav;
    let location = useLocation();
    let history = useHistory();
    const detActiveTab = (pageName: string): boolean => {
        return location.pathname == pageName;
    }
    return (
        <>
            <Header className={"header"}>
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
                                {/*<Link to={"/"}></Link>*/}
                                <HashLink smooth to="/#main">
                                    <Nav.Item
                                        active={detActiveTab("#main")}><span>Главная</span></Nav.Item>
                                </HashLink>
                                <HashLink smooth to="/#onas">
                                    <Nav.Item active={detActiveTab("#onas")}
                                              eventKey={"/about"}><span>О нас</span></Nav.Item>
                                </HashLink>
                                {/*<Link to={"/about"}></Link>*/}
                                {user!==-1?<Link to={"/projects"}><Nav.Item
                                    active={detActiveTab("/projects")}><span>Проекты</span></Nav.Item></Link>:null}
                                <Link to={"/risks"}><Nav.Item
                                    active={detActiveTab("/risks")}><span>Риски</span></Nav.Item></Link>
                                <Link to={"/guarantees"}><Nav.Item active={detActiveTab("/guarantees")}
                                                                   eventKey={"/guarantees"}><span>Гарантии</span></Nav.Item></Link>
                                <Link to={"/contacts"}><Nav.Item active={detActiveTab("/contacts")}
                                                                 eventKey={"/contacts"}><span>Контакты</span></Nav.Item></Link>
                            </Nav>
                            <Button onClick={()=>{history.push("/lk")}} className={"buttonPersonalArea"} color="cyan"><Icon
                                icon="avatar"/> Личный кабинет</Button>
                        </div>
                    </div>}
                </div>
            </Header>
            <Content>
                <Switch>
                    <Route exact path={"/"}>
                        <MainContentPage/>
                    </Route>
                    <Route exact path={"/about"}>
                        <AboutUsPage/>
                    </Route>
                    <Route exact path={"/risks"}>
                        <RisksPage/>
                    </Route>
                    <Route exact path={"/guarantees"}>
                        <GuaranteesPage/>
                    </Route>
                    <Route exact path={"/contacts"}>
                        <ContactPage/>
                    </Route>
                    <Route exact path={"/lk"}>
                        <PersonalAreaPage/>
                    </Route>
                </Switch>
            </Content>
            <div style={{marginBottom:"49vh",width:"0"}}>
            </div>
            <Footer className={"styleFooter"}>
                <Grid style={{width: "100%"}}>
                    <Row>
                        <div className={"footerFlexed"}>
                            <Col md={12}>
                                <h4>Официальные каналы</h4>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <div onClick={() => {
                                        alert("instagram")
                                    }} className={"styleIcons"}>
                                        <div style={{width: "32px", minWidth: "32px"}}><FaInstagram width={"16"}
                                                                                                    size={"1x"}/>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        alert("YouTube")
                                    }} className={"styleIcons"}>
                                        <div style={{width: "32px", minWidth: "16px"}}><FaYoutube width={"16"}
                                                                                                  size={"1x"}/>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        alert("Mail")
                                    }} className={"styleIcons"}>
                                        <div style={{width: "32px", minWidth: "16px"}}><FaEnvelope width={"16"}
                                                                                                   size={"1x"}/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div onClick={() => {
                                    alert("Video")
                                }} style={{
                                    justifyContent: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "20px",
                                    padding: "12px 15px 10px 15px",
                                    border: "solid 2px #e9b370",

                                }}>
                                    <div style={{width: "32px", minWidth: "16px", marginTop: "5px"}}><HiOutlineArrowRight width={"16"}
                                                                                                                          size={"1x"}/></div>
                                    <span style={{marginLeft: "10px", fontSize: "30px"}}>Начать свой проект</span>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Grid>
                <div className={"site-copy"}>
                    <p>
                        Copyright © 2021 InProject.
                    </p>
                </div>
            </Footer>
        </>
    );
}


export default App;
