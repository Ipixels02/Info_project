import React, {useState, useEffect, useRef, FC} from 'react';
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
                        style={{display: "flex",fontSize:"20px", justifyContent: "center", alignItems: "center", padding: "10px 15px"}}>
                        <Button color={"cyan"} size={'lg'}><span style={{fontSize:"20px"}}>Участвовать в программе</span></Button>
                        <div onClick={()=>{alert("IDIDIDIDI")}} style={{marginLeft: "40px",padding:"12px 15px 10px 15px", border: "solid 2px white", borderRadius: "100px", display: "flex", alignItems:"center"}}>
                            <div style={{width: "54px"}}><FaPlayCircle width={"16"} size={"1x"}/></div>
                            <span style={{marginLeft: "10px"}}>Посмотреть видео</span>
                        </div>
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
                    <FlexboxGrid.Item style={{margin:"auto 0"}}  componentClass={Col} colspan={8} md={8} order={isTabletOrMobile ? 2 : 3}>
                        <Button  color={"cyan"} size={'lg'}>Приссоединится</Button>
                    </FlexboxGrid.Item>
                </FlexboxGrid>

                <FlexboxGrid justify="space-between" align="top">
                    <FlexboxGrid.Item componentClass={Col} colspan={16} md={6}>
                        <div className={"about_company"}>
                            <h1 style={{verticalAlign: "top"}}>О
                                компании</h1>
                            <h5>Помогаем обрести финансовую подушку с 2021 года</h5>
                        </div>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={6}
                                      style={{backgroundColor: "black"}}>f</FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={8}
                                      style={{backgroundColor: "white"}}>f</FlexboxGrid.Item>
                </FlexboxGrid>


            </div>
        </>
    );
}