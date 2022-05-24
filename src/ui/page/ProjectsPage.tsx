import React, {useState, useEffect, useRef, FC} from 'react';
import {
    Alert,
    Button, Col, FlexboxGrid, Grid, Icon, Row,
} from 'rsuite';
import {useAsyncRequest} from "../../util/useAsyncRequest";
import {getProjects} from "../../api/ProjectApi";
import {ProjectEntity} from "../../api/models";


export const ProjectsPage = () => {

    const [pendingProjcet, errorProject, dataProject, refreshFnProject] = useAsyncRequest(async () => {
        return getProjects();
    }, undefined, undefined);

    useEffect(() => {
        refreshFnProject();
    }, []);
    return (
        <div>
            <div className={"projectStyle"}>
                <FlexboxGrid style={{padding: "10% 4% 0", width: "100%"}}
                             justify="space-between">
                    <FlexboxGrid.Item componentClass={Col} colspan={16} md={6}>
                        <h1>Инвестиционные проекты</h1>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={6}/>
                    <FlexboxGrid.Item componentClass={Col} colspan={12} md={8}/>
                </FlexboxGrid>

                <FlexboxGrid style={{padding: "10% 4% 0"}}
                             justify="space-around">
                    {dataProject ? (dataProject as Array<ProjectEntity>).slice(0, 6).map(project => {
                        //TOOD: кастомная модель
                        return (
                            <>
                                <FlexboxGrid.Item componentClass={Col} colspan={16} md={8}>
                                    <div className={"wrap"}>
                                        <img width={"100%"} src={"/api/content/" + project.projectIcon}
                                             alt={project.name}/>
                                        <div className={"aboutProject"}>
                                            <h4 style={{marginBottom: "18px"}}>{project.name}</h4>
                                            <span style={{color: "#e9b370"}}>{project.shortDesc}<br/>
                                    </span>
                                            <Button style={{
                                                backgroundColor: "#ffdc14",
                                                color: "black",
                                                fontWeight: "bold",
                                                marginTop: "10%"
                                            }}
                                                    onClick={console.log}>Подробнее</Button>
                                        </div>
                                    </div>
                                </FlexboxGrid.Item>

                            </>
                        )
                    }) : null}
                    {/*<FlexboxGrid.Item componentClass={Col} colspan={16} md={8}>*/}
                    {/*    <div className={"wrap"}>*/}
                    {/*        <img width={"100%"} src={process.env.PUBLIC_URL + '/images/project1.jpg'}*/}
                    {/*             alt={"Описание 1 проекта"}/>*/}
                    {/*        <div className={"aboutProject"}>*/}
                    {/*            <h4 style={{marginBottom: "18px"}}>PHOENIX INVEST</h4>*/}
                    {/*            <span>*/}
                    {/*                ВЫСОКОРИСКОВЫЙ ПРОЕКТ Компания работает с 9 апреля 2021 года.*/}
                    {/*                Доход от 24% до 44% в месяц, зависит от суммы инвестиций. Авто, Дом и другое<br/>*/}
                    {/*                </span>*/}
                    {/*            <Button style={{marginTop: "10%"}} color={"cyan"}*/}
                    {/*                    onClick={console.log}>Подробнее</Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</FlexboxGrid.Item>*/}
                    {/*<FlexboxGrid.Item componentClass={Col} colspan={12} md={8}>*/}
                    {/*    <div className={"wrap"}>*/}
                    {/*        <img width={"100%"} src={process.env.PUBLIC_URL + '/images/project2.jpg'}*/}
                    {/*             alt={"Описание 2 проекта"}/>*/}
                    {/*        <div className={"aboutProject"}>*/}
                    {/*            <h4 style={{marginBottom: "18px"}}>TOREXO</h4>*/}
                    {/*            <span>*/}
                    {/*                ВЫСОКОРИСКОВЫЙ ПРОЕКТ. Пассивный доход от 25% до 30% в месяц.*/}
                    {/*                Старт проекта был 14.06.2021 г. Линейный + Бинарный маркетинг. Вход от 100$<br/>*/}
                    {/*                </span>*/}
                    {/*            <Button style={{marginTop: "10%"}} color={"cyan"}*/}
                    {/*                    onClick={console.log}>Подробнее</Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</FlexboxGrid.Item>*/}
                    {/*<FlexboxGrid.Item componentClass={Col} colspan={12} md={8}>*/}
                    {/*    <div className={"wrap"}>*/}
                    {/*        <img width={"100%"} src={process.env.PUBLIC_URL + '/images/project3.png'}*/}
                    {/*             alt={"Описание 3 проекта"}/>*/}
                    {/*        <div className={"aboutProject"}>*/}
                    {/*            <h4 style={{marginBottom: "18px"}}>ETHERCONNECT</h4>*/}
                    {/*            <span style={{minHeight: "40px"}}>*/}
                    {/*                ВЫСОКОРИСКОВЫЙ ПРОЕКТ. Пассивный доход от 10% до 17,5% в месяц + рост своей монеты ECC.*/}
                    {/*                Старт: апрель 2021 г. Офисная программа. Линейный маркетинг.<br/>*/}
                    {/*            </span>*/}
                    {/*            <Button style={{marginTop: "10%"}} color={"cyan"}*/}
                    {/*                    onClick={console.log}>Подробнее</Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</FlexboxGrid.Item>*/}
                </FlexboxGrid>
                <div style={{textAlign: "center"}}>
                    <Button color={"violet"} size={"lg"}>Остальные проекты <Icon
                        icon={"angle-right"}/></Button>
                </div>
            </div>
        </div>
    );
}