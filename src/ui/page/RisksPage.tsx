import {
    Button, Col, FlexboxGrid, Grid, Row,
} from 'rsuite';
import {useMediaQuery} from "react-responsive";

export const RisksPage = () => {
    const IsDesktop = useMediaQuery({query: '(min-width: 991px)'});
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    const isMobile = useMediaQuery({query: '(max-width: 555px)'});
    return (
        <>
            <div className={"risks"}>
                <h1>Риски</h1>
                {/*<Grid>*/}
                {/*    <Row style={{paddingTop: "50px"}}>*/}
                {/*        <Col md={12} sm={24}>*/}
                {/*            <img style={{width: "250px", marginBottom: "10%"}}*/}
                {/*                 src={process.env.PUBLIC_URL + '/images/man_risks.jpg'} alt={"Описание 1 пикчи"}/>*/}
                {/*        </Col>*/}
                {/*        <Col md={12} sm={24}>*/}
                {/*            <h2>Какие могут быть риски?1</h2>*/}
                {/*            <h6>Какое-то интересное описание Lorem ipsum dolor sit amet, consectetur adipiscing elit,*/}
                {/*                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim*/}
                {/*                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo*/}
                {/*                consequat.</h6>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*    <Row style={{paddingTop: "50px"}}>*/}
                {/*        <Col md={12} sm={24}>*/}
                {/*            <h2>Какие могут быть риски?2</h2>*/}
                {/*            <h6>Какое-то интересное описание Lorem ipsum dolor*/}
                {/*                sit amet, consectetur adipiscing elit,*/}
                {/*                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim*/}
                {/*                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo*/}
                {/*                consequat.</h6>*/}
                {/*        </Col>*/}
                {/*        <Col md={12} sm={24}>*/}
                {/*            <img style={{width: "250px"}} src={process.env.PUBLIC_URL + '/images/man_risks.jpg'}*/}
                {/*                 alt={"Описание 2 пикчи"}/>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Grid>*/}
                <FlexboxGrid style={{padding: "50px 4% 5%"}}
                             justify="space-around" align="top">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
                        <img style={{width: "250px", marginBottom: "10%"}}
                             src={process.env.PUBLIC_URL + '/images/man_risks.jpg'} alt={"Описание 1 пикчи"}/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
                        <h2>Какие могут быть риски?1</h2>
                        <h6 style={{marginBottom: "10%", color: "#e9b370"}}>Какое-то интересное описание Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</h6>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid style={{padding: "0 4%"}}
                             justify="space-around" align="top">
                    <FlexboxGrid.Item order={isTabletOrMobile ? 2 : 1} componentClass={Col} colspan={24} md={8}>
                        <h2>Какие могут быть риски?2</h2>
                        <h6 style={{color: "#e9b370"}}>Какое-то интересное описание Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</h6>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item order={isTabletOrMobile ? 1 : 2} componentClass={Col} colspan={24} md={8}>
                        <img style={{width: "250px", marginBottom: "10%"}} src={process.env.PUBLIC_URL + '/images/man_risks.jpg'}
                             alt={"Описание 2 пикчи"}/>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
            <Grid style={{width: "100%"}}>
                <Row>
                    <div className={"formBlock"}>
                        <Col md={24}>
                            <div className={"formBlockText"}>
                                <h3 style={{marginRight: "15%"}}>С НАМИ ВЫ В ТРЕНДЕ И В ПРИБЫЛИ!</h3>
                            </div>
                        </Col>
                        <Col md={24}>
                            <div className={"formBlockText"}>
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
        </>
    );
}