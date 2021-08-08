import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button, Col, FlexboxGrid, Grid, Row,
} from 'rsuite';

import {
    HashRouter as Router,
} from "react-router-dom";
import {FaInstagram, FaYoutube, FaEnvelope, FaArrowRight} from "react-icons/fa";
import {useMediaQuery} from "react-responsive";

export const GuaranteesPage = () => {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    return (
        <Router>
            <div className={"guarantees"}>
                <img src={process.env.PUBLIC_URL + '/images/bulb.png'} width={"150px"} alt={"Описание 1 пикчи"}/>
                <h1>Гарантии</h1> {/*Добавить золотую полоску слева и справа*/}
                <FlexboxGrid style={{padding: "0 4%", marginTop: "5%"}} justify="space-around" align="top">
                    <FlexboxGrid.Item className={"guaranteesItem"} componentClass={Col} colspan={12} md={4}>
                        <h4>Заголовок 1 гарантии</h4>
                        <p className={"guaranteesText"}>Какое-то интересное описание Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item className={"guaranteesItem"} componentClass={Col} colspan={12} md={4}>
                        <h4>Заголовок 2 гарантии</h4>
                        <p className={"guaranteesText"}>Какое-то интересное описание Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item className={"guaranteesItem"} componentClass={Col} colspan={12} md={4}>
                        <h4>Заголовок 3 гарантии</h4>
                        <p className={"guaranteesText"}>Какое-то интересное описание Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item className={"guaranteesItem"} componentClass={Col} colspan={12} md={4}>
                        <h4>Заголовок 4 гарантии</h4>
                        <p className={"guaranteesText"}>Какое-то интересное описание Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
            <Grid style={{width: "100%"}}>
                <Row>
                    <div className={"footerFlexed"}>
                        <Col xs={12}>
                            <div className={"formBlockText"}>
                                <h4>Официальные каналы</h4>
                                <div onClick={() => {
                                    alert("instagram")
                                }} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px 15px 10px 15px",
                                }}>
                                    <div style={{width: "54px", minWidth: "32px"}}><FaInstagram width={"16"}
                                                                                                 size={"1x"}/></div>
                                </div>
                                <div onClick={() => {
                                    alert("YouTube")
                                }} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px 15px 10px 15px",
                                }}>
                                    <div style={{width: "54px", minWidth: "32px"}}><FaYoutube width={"16"}
                                                                                                size={"1x"}/></div>
                                </div>
                                <div onClick={() => {
                                    alert("Mail")
                                }} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px 15px 10px 15px",
                                }}>
                                    <div style={{width: "54px", minWidth: "32px"}}><FaEnvelope width={"16"}
                                                                                                size={"1x"}/></div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div onClick={() => {
                                alert("Video")
                            }} style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: isTabletOrMobile ? undefined : "40px",
                                marginTop: isTabletOrMobile ? "20px" : undefined,
                                padding: "12px 15px 10px 15px",
                                border: "solid 2px white",
                                borderRadius: "100px"
                            }}>
                                <div style={{width: "54px", minWidth: "32px"}}><FaArrowRight width={"16"}
                                                                                             size={"1x"}/></div>
                                <span style={{marginLeft: "10px"}}>Начать свой проект</span>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Grid>
        </Router>
    );
}