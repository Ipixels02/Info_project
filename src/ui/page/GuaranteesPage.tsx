import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button, Col, FlexboxGrid, Grid, Row,
} from 'rsuite';


import {FaInstagram, FaYoutube, FaEnvelope, FaArrowRight} from "react-icons/fa";
import {useMediaQuery} from "react-responsive";

export const GuaranteesPage = () => {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    return (
        <div className={"guarantees"}>
            <img src={process.env.PUBLIC_URL + '/images/def.png'} width={"150px"} alt={"Описание 1 пикчи"}/>
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
    );
}