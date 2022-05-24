import {
    Button,
    FlexboxGrid, Col, Divider
} from 'rsuite';
import {
    Switch,
    Route,
    Link, useHistory, useLocation
} from "react-router-dom";
import {Modal} from 'rsuite';

import {FaPlayCircle} from 'react-icons/fa';
import Particles from "react-tsparticles";
import {particlesConfig} from "../component/ParticlesConfig";
import {useMediaQuery} from "react-responsive";
import {FC, useState} from "react";
import {UserEntity} from "../../api/models";
import {userHook} from "../../api/UserApi";

interface MainContentPageInterface {
    setModal: Function
}

function ResponsiveSwitcher(realPosition: number) {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    const isMobile = useMediaQuery({query: '(max-width: 555px)'});
    const switchOrder = [1, 2, 3];
    if (isTabletOrMobile) {
        realPosition = switchOrder[1];
    } else {

    }
    if (isMobile) {
        realPosition = switchOrder[1];
    }
}

export const MainContentPage: FC<MainContentPageInterface> = ({setModal}) => {
    const IsDesktop = useMediaQuery({query: '(min-width: 991px)'});
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    const isMobile = useMediaQuery({query: '(max-width: 555px)'});
    const [user, setUser] = useState<UserEntity | number>(-1);
    userHook(setUser, user);
    let history = useHistory();
    return (
        <>
            <div style={{position: "relative"}}>
                <Particles
                    style={{position: "absolute"}}
                    options={particlesConfig}
                />
                <div id={"main"} className={"main-block"}>
                    <div className={"main-middle-text"}>
                        <h5>Передовая инвестиционная компания</h5>
                        <h1>Сайт-Агрегатор инвестиционных <br/> и финансовых проектов</h1>

                        <div
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "10px 15px"
                            }}>
                            <FlexboxGrid justify={"space-around"} align={"middle"}>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={11}>
                                    <Button onClick={() => {
                                        user == -1 ? setModal(true) : history.push("/projects")
                                    }} color={"violet"}
                                            size={'lg'}><span
                                        style={{
                                            fontSize: "20px",
                                            wordBreak: "break-word"
                                        }}>Участвовать в программе</span></Button></FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} sm={13}>
                                    <div className={"videoButton"} onClick={() => {
                                        alert("Video")
                                    }} style={{
                                        marginLeft: isTabletOrMobile ? undefined : "40px",
                                        marginTop: isTabletOrMobile ? "20px" : undefined
                                    }}>
                                        <div style={{width: "54px", minWidth: "32px"}}><FaPlayCircle width={"16"}
                                                                                                     size={"1x"}/></div>
                                        <span style={{marginLeft: "10px"}}>Посмотреть видео</span>
                                    </div>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </div>
                    </div>
                </div>
                <div id={"about"} className={"about-block"}>
                    <img className={"styleImg"} src={process.env.PUBLIC_URL + '/images/bg_about_us.svg'}/>
                    <FlexboxGrid style={{padding: "0 4%"}} justify="space-between" align="top">
                        <FlexboxGrid.Item componentClass={Col} colspan={16} md={8} xs={24} order={1}>
                            <div className={"about_company"}>
                                <h1 style={{verticalAlign: "top"}}>О компании</h1>
                                <Divider style={{background: "#3c1348", height: "2px", borderRadius: "10px"}}/>
                                <h5 style={{color: "#7A7A7A"}}>Помогаем обрести финансовую подушку с 2021 года</h5>
                            </div>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={12} md={6} xs={24}
                                          order={isTabletOrMobile ? 3 : 2}/>
                        <FlexboxGrid.Item style={{marginTop: "auto", textAlign: "center"}} componentClass={Col}
                                          colspan={24} md={8}
                                          order={isTabletOrMobile ? 2 : 3}>
                            <Button onClick={() => {
                                user == -1 ? setModal(true) : history.push("/projects")
                            }} color={"cyan"} size={'lg'}>Приссоединится</Button>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                    <div className={"aboutBlockContent"}>
                        <FlexboxGrid style={{padding: "0 4%"}} justify="space-between" align="top">
                            <FlexboxGrid.Item order={IsDesktop ? 3 : 1} componentClass={Col} colspan={24} md={8}>
                                <div className={"about_company_textBlock"}>
                                    <h2>Какой-то интересный заголовок</h2><br/>
                                    <h6>Какое-то интересное описание Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore
                                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                        in
                                        culpa
                                        qui officia deserunt mollit anim id est laborum.</h6>
                                </div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item order={isMobile ? 2 : 1} componentClass={Col} colspan={12} md={6}>
                                <div className={"leftPictureMainBlock"}>
                                    <img style={{ marginBottom: "60px"}}
                                         src={process.env.PUBLIC_URL + '/images/man.jpg'} alt={"Описание 1 пикчи"}/>
                                    <img src={process.env.PUBLIC_URL + '/images/man.jpg'}
                                         alt={"Описание 2 пикчи"}/>
                                </div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item order={isMobile ? 3 : 1} componentClass={Col} colspan={12} md={6}>
                                <div className={"rightPictureMainBlock"}>
                                    <img style={{ marginBottom: "60px"}}
                                         src={process.env.PUBLIC_URL + '/images/man.jpg'}
                                         alt={"Описание 3 пикчи"}/>
                                    <img src={process.env.PUBLIC_URL + '/images/man.jpg'}
                                         alt={"Описание 4 пикчи"}/>
                                </div>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </div>
                </div>
            </div>
        </>
    );
}