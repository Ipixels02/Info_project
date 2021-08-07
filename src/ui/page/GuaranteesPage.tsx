import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button, Col, FlexboxGrid, Grid, Row,
} from 'rsuite';

import {
    HashRouter as Router,
} from "react-router-dom";

export const GuaranteesPage = () => {
    return (
        <Router>
            <div style={{textAlign: "center", height: "130vh", paddingTop: "100px"}}>
                <h1>Гарантии</h1>
            </div>
        </Router>
    );
}