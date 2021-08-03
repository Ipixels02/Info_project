//import 'rsuite/dist/styles/rsuite-default.css';
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




export const MainContent = () => {
    return (
        <Router>
            <Content style={{height:"1000px"}}>
                <Grid fluid={true}>
                    <Row>
                        <div className={"main-block"}>
                            <h1>Сайт-Агрегатор инвестиционных <br/> и финансовых проектов</h1>
                        </div>
                        <div className={"about-block"}>
                            <FlexboxGrid justify="center" align="middle">
                                <FlexboxGrid.Item colspan={6}>colspan={6}</FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={6}>colspan={6}</FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={6}>colspan={6}</FlexboxGrid.Item>
                            </FlexboxGrid>
                        </div>
                    </Row>
                </Grid>
            </Content>
        </Router>
    );
}