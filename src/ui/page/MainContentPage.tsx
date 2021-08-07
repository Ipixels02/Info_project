import {
    Button,
    FlexboxGrid, Col
} from 'rsuite';

import {FaPlayCircle} from 'react-icons/fa';
import Particles from "react-tsparticles";
import {particlesConfig} from "../component/ParticlesConfig";
import {useMediaQuery} from "react-responsive";

export const MainContentPage = () => {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 991px)'});
    return (
        <>
            <Particles
                id="tsparticles"
                options={particlesConfig}
            />
            <div className={"main-block"}>
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
                            <FlexboxGrid.Item componentClass={Col} colspan={13} md={11}><Button color={"cyan"}
                                                                                                size={'lg'}><span
                                style={{
                                    fontSize: "20px",
                                    wordBreak: "break-word"
                                }}>Участвовать в программе</span></Button></FlexboxGrid.Item>
                            <FlexboxGrid.Item componentClass={Col} colspan={13} md={13}>
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
                                    <div style={{width: "54px", minWidth: "32px"}}><FaPlayCircle width={"16"}
                                                                                                 size={"1x"}/></div>
                                    <span style={{marginLeft: "10px"}}>Посмотреть видео</span>
                                </div>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </div>
                </div>
            </div>
            <div className={"about-block"}>
                <img className={"styleImg"} src={process.env.PUBLIC_URL + '/images/bg_about_us.svg'}/>
                <FlexboxGrid style={{padding: "0 4%"}} justify="space-between" align="top">
                    <FlexboxGrid.Item componentClass={Col} colspan={16} md={8} order={1}>
                        <div className={"about_company"}>
                            <h1 style={{verticalAlign: "top"}}>О компании</h1>
                            <h5 style={{color: "#7A7A7A"}}>Помогаем обрести финансовую подушку с 2021 года</h5>
                        </div>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={6}
                                      order={isTabletOrMobile ? 3 : 2}></FlexboxGrid.Item>
                    <FlexboxGrid.Item style={{marginTop: "auto"}} componentClass={Col} colspan={8} md={8}
                                      order={isTabletOrMobile ? 2 : 3}>
                        <Button color={"cyan"} size={'lg'}>Приссоединится</Button>
                    </FlexboxGrid.Item>
                </FlexboxGrid>

                <FlexboxGrid style={{padding: "0 4%"}} justify="space-between" align="top">
                    <FlexboxGrid.Item componentClass={Col} colspan={16} md={6}>
                        <div style={{marginTop: "45%"}}>
                            <img style={{width: "250px", marginBottom: "60px"}}
                                 src={process.env.PUBLIC_URL + '/images/man.jpg'} alt={"Описание 1 пикчи"}/>
                            <img width={"250px"} src={process.env.PUBLIC_URL + '/images/man.jpg'}
                                 alt={"Описание 2 пикчи"}/>
                        </div>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={6}>
                        <div style={{marginTop: "75%"}}>
                            <img style={{width: "250px", marginBottom: "60px"}}
                                 src={process.env.PUBLIC_URL + '/images/man.jpg'}
                                 alt={"Описание 3 пикчи"}/>
                            <img width={"250px"} src={process.env.PUBLIC_URL + '/images/man.jpg'}
                                 alt={"Описание 4 пикчи"}/>
                        </div>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={8}>
                        <div className={"about_company_textBlock"}>
                            <h2>Какой-то интересный заголовок</h2><br/>
                            <h6>Какое-то интересное описание Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.</h6>
                        </div>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        </>
    );
}