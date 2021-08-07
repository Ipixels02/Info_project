import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button, Col, ControlLabel, FlexboxGrid, Form, FormControl, FormGroup, Grid, Row,
} from 'rsuite';

import {
    HashRouter as Router,
} from "react-router-dom";

export const ContactPage = () => {
    return (
        <Router>
            <div style={{textAlign: "center", height: "130vh", paddingTop: "100px"}}>
                <h1>Наши контакты</h1>
                <FlexboxGrid style={{padding: "0 4%", marginTop: "10%"}} justify="space-around" align="top">
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={12}>
                        <h4>Хотите связаться с нами, напишите сообщение ниже:</h4>
                        <Form>
                            <FormGroup>
                                <FormControl name={"name"} placeholder={"Ваше имя"}/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl name={"email"} placeholder={"Ваше email"}/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl name={"phone"} placeholder={"Ваше телефон"}/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl name={"topic"} placeholder={"Ваше телефон"}/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl name={"textarea"} rows={5} componentClass={"textarea"} placeholder={"Ваше телефон"}/>
                            </FormGroup>
                            <Button color={"cyan"} size={'lg'}><span
                                style={{
                                    fontSize: "20px",
                                    wordBreak: "break-word"
                                }}>Отправить</span></Button>
                        </Form>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={10}>
                        <h2>Гугл карта</h2>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        </Router>
    );
}