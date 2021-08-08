import {
    Button, Col, FlexboxGrid, Grid, Row,
} from 'rsuite';

import {
    HashRouter as Router,
} from "react-router-dom";

export const RisksPage = () => {
    return (
        <Router>
            <div className={"risks"}>
                <h1>Риски</h1>
                <FlexboxGrid style={{padding: "0 4%", marginTop: "5 %"}} justify="space-around" align="top">
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={8}>
                        <img style={{width: "250px", marginBottom: "20%"}}
                             src={process.env.PUBLIC_URL + '/images/man_risks.jpg'} alt={"Описание 1 пикчи"}/>
                        <h2>Какие могут быть риски?</h2>
                        <h6>Какое-то интересное описание Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.</h6>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={8}>
                        <h2>Какие могут быть риски?</h2>
                        <h6 style={{marginBottom: "20%"}}>Какое-то интересное описание Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.</h6>
                        <img style={{width: "250px"}} src={process.env.PUBLIC_URL + '/images/man_risks.jpg'}
                             alt={"Описание 2 пикчи"}/>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
            <Grid style={{width: "100%"}}>
                <Row>
                    <div className={"formBlock"}>
                        <Col md={24}>
                            <div className={"formBlockText"}>
                                <h3>С НАМИ ВЫ В ТРЕНДЕ И В ПРИБЫЛИ!</h3>
                                <Button color={"cyan"} size={'lg'}><span
                                    style={{
                                        fontSize: "20px",
                                        wordBreak: "break-word"
                                    }}>Зарегистрироваться</span></Button>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Grid>
        </Router>
    );
}