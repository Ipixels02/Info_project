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
    IconButton,
    FlexboxGrid, Col
} from 'rsuite';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FaPlayCircle } from 'react-icons/fa';


export const MainContent = () => {
    return (
        <Router>
            <div className={"main-block"}>
                <div className={"main-middle-text"}>
                    <h5>Передовая инвестиционная компания</h5>
                    <h1>Сайт-Агрегатор инвестиционных <br/> и финансовых проектов</h1>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 15px"}}>
                        <Button color={"cyan"} size={'lg'}>Участвовать в программе</Button>
                        <div style={{width: "32px"}}><FaPlayCircle width={"16"} size={"1x"}/></div>
                    </div>
                </div>
            </div>
            <div className={"about-block"}>
                <FlexboxGrid className={"about_grid"} justify="space-between" align="middle">
                    <FlexboxGrid.Item colspan={6}>colspan={6}</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6}>colspan={6}</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6}>colspan={6}</FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        </Router>
    );
}