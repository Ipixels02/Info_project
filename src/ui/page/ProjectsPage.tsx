import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Button, Col, FlexboxGrid, Grid, Row,
} from 'rsuite';

import {
    HashRouter as Router,
} from "react-router-dom";

export const ProjectsPage = () => {
    return (
        <Router>
            <div style={{textAlign: "center", height: "130vh", paddingTop: "100px"}}>
                <h1>Инвестиционные проекты</h1>
            </div>
        </Router>
    );
}