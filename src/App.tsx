import './customTheme.css'
import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button,
    Header,
    Nav,
    Content,
    Footer,
    Icon, Row, Col, Grid, Modal,
} from 'rsuite';
import {
    Switch,
    Route,
    Link, useHistory, useLocation
} from "react-router-dom";
import {Sling as Hamburger} from 'hamburger-react'
import {useMediaQuery} from "react-responsive";

import {MainContentPage} from './ui/page/MainContentPage';
import {AboutUsPage} from './ui/page/AboutUsPage';
import {RisksPage} from './ui/page/RisksPage';
import {GuaranteesPage} from './ui/page/GuaranteesPage';
import {ContactPage} from './ui/page/ContactPage';

import {userHook} from "./api/UserApi";
import {PersonalAreaPage} from "./ui/page/PersonalAreaPage";
import {RegistrationPage} from "./ui/page/RegistrationPage";
import {FaEnvelope, FaInstagram, FaYoutube} from "react-icons/fa";
import {HiOutlineArrowRight} from "react-icons/hi"
import {UserEntity} from "./api/models";
import {HashLink} from 'react-router-hash-link';
import {ProjectsPage} from "./ui/page/ProjectsPage";
import {ProjectsComponent} from "./ui/component/ProjectsComponent";


function App() {
    const [isOpenNav, setOpenNav] = useState(false);
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    const [user, setUser] = useState<UserEntity | number>(-1);
    const [modal, setModal] = useState<boolean>(false);
    userHook(setUser, user);
    const covertedUser = user === -1 ? undefined : user as UserEntity;
    const isMobileOpenNav = !isTabletOrMobile || isTabletOrMobile && isOpenNav;
    let location = useLocation();
    let history = useHistory();

    const detActiveTab = (pageName: string): boolean => {
        if (location.hash == pageName)
            return true;
        if (location.pathname == pageName && !location.hash)
            return true
        return false;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenNav(false);
    }, [location.pathname, location.hash]);
    return (
        <>
            <Header className={"header"}>
                <a href="#" className="navbar-brand logo">
                    <img className="logo" alt="logo" style={{width: "60px"}} src="/public/logo512.png"/>
                </a>
                <div style={{position: isTabletOrMobile && isOpenNav ? "fixed" : undefined}}
                     className={"header_navigation"}>

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
                                <HashLink smooth to="/#about">
                                    <Nav.Item active={detActiveTab("#about")}
                                              eventKey={"/about"}><span>О нас</span></Nav.Item>
                                </HashLink>
                                {/*<Link to={"/about"}></Link>*/}
                                {user !== -1 ? <Link to={"/projects"}><Nav.Item
                                    active={detActiveTab("/projects")}><span>Проекты</span></Nav.Item></Link> : null}
                                <Link to={"/risks"}><Nav.Item
                                    active={detActiveTab("/risks")}><span>Риски</span></Nav.Item></Link>
                                <Link to={"/guarantees"}><Nav.Item active={detActiveTab("/guarantees")}
                                                                   eventKey={"/guarantees"}><span>Гарантии</span></Nav.Item></Link>
                                <Link to={"/contacts"}><Nav.Item active={detActiveTab("/contacts")}
                                                                 eventKey={"/contacts"}><span>Контакты</span></Nav.Item></Link>
                            </Nav>
                            <Button onClick={() => {
                                history.push("/lk")
                            }} className={"buttonPersonalArea"}
                                    color="violet">{user === -1 ? "Личный кабинет" : covertedUser?.login}</Button>
                        </div>
                    </div>}
                </div>
            </Header>
            <Content style={{zIndex: 100}}>
                <Switch>
                    <Route exact path={"/"}>
                        <MainContentPage setModal={setModal}/>
                    </Route>
                    <Route exact path={"/about"}>
                        <AboutUsPage/>
                    </Route>
                    <Route exact path={"/projects"}>
                        <ProjectsPage/>
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
                    <Route exact path={"/reg"}>
                        <RegistrationPage/>
                    </Route>
                </Switch>
            </Content>
            <div style={{marginBottom: "49vh", width: "0"}}>
            </div>
            <Footer className={"styleFooter"}>
                <Grid style={{width: "100%"}}>
                    <Row>
                        <div className={"footerFlexed"}>
                            <Col md={12}>
                                <h4>Официальные каналы</h4>
                                <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                                    <div onClick={() => {
                                        alert("instagram")
                                    }} className={"styleIcons"}>
                                        <div style={{color:"green", borderColor: "green", width: "32px", minWidth: "16px"}}><FaInstagram width={"64"}
                                                                                                    size={"1x"}/>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        alert("YouTube")
                                    }} className={"styleIcons"}>
                                        <div style={{color:"yellow", borderColor: "yellow", width: "32px", minWidth: "16px"}}><FaYoutube width={"16"}
                                                                                                  size={"1x"}/>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        alert("Mail")
                                    }} className={"styleIcons"}>
                                        <div style={{color:"red",borderColor: "red", width: "32px", minWidth: "16px"}}><FaEnvelope width={"32px"}
                                                                                                   size={"2x"}/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div onClick={() => {
                                    user == -1 ? setModal(true) : history.push("/projects")
                                }} className={"buttonOnFooter"}>
                                    <div className={"startProjectButton"}>
                                        <HiOutlineArrowRight width={"16"}
                                                             size={"1x"}/></div>
                                    <span>Начать свой проект</span>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Grid>
                <div className={"site-copy"}>
                    <Grid style={{width: "100%"}}>
                        <Row>
                            <div>
                                <Col style={{textAlign: "left", paddingLeft: "5%"}} xs={12}>
                                    <p>
                                        Copyright © 2021 M$M.
                                    </p>
                                </Col>
                                <Col style={{
                                    textAlign: "right",
                                    paddingRight: "5%",
                                    textDecoration: "underline"
                                }} xs={12}>
                                    <span style={{cursor: "pointer"}}>
                                        M$M
                                    </span>
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                </div>
            </Footer>
            <Modal show={modal} onHide={() => {
                setModal(false)
            }}>
                <Modal.Header>
                    <Modal.Title><span style={{color: "black"}}>Внимание!</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span style={{color: "black"}}>Регистрация доступна только по реферальной ссылке.<br/>
                        Чтобы стать участником клуба получите ссылку от наставника или напишите нам.</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        history.push("/reg");
                        setModal(false)
                    }} color={"violet"} appearance="primary">
                        Написать нам
                    </Button>
                    <Button onClick={() => {
                        setModal(false)
                    }} color={"red"} appearance="primary">
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default App;
