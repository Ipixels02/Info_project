import {useAsyncRequest} from "../../util/useAsyncRequest";
import {getProjects, regOnProject, setReferalToProject} from "../../api/ProjectApi";
import React, {FC, useEffect, useState} from "react";
import {ProjectEntity, ReferalAddLinks, ReferalModel} from "../../api/models";
import {Alert, Button, Col, Icon, Input, InputGroup, Panel, Row, Slider, Tooltip, Whisper} from "rsuite";
import {AiFillInfoCircle} from "react-icons/ai";
import {permanentReloadUser} from "../../api/UserApi";

interface ProjectComponentInterface {
    hasUserInviteCode: boolean
}


export const ProjectsComponent: FC<ProjectComponentInterface> = ({hasUserInviteCode}) => {
    const [pendingProjcet, errorProject, dataProject, refreshFnProject] = useAsyncRequest(async () => {
        return getProjects();
    }, undefined, undefined);
    const [activeKey, setActiveKey] = useState(-1);
    const [currentReferalLink, setCurrentReferalLink] = useState<string | undefined>(undefined)
    const [selectedProject, setSelectedProject] = useState<ProjectEntity | undefined>(undefined);
    const [leftChain, setLeftChain] = useState<string | undefined>(undefined);
    const [rightChain, setRightChain] = useState<string | undefined>(undefined);
    const [binareChance, setBinareChance] = useState<number | undefined>(undefined);

    useEffect(() => {
        refreshFnProject();
    }, []);
    const normalizedProject = dataProject as Array<ProjectEntity>;
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{paddingLeft: "20px", width: "100%"}}>
                {dataProject ? (dataProject as Array<ProjectEntity>).slice(0, 10).map((project, index) => {
                    //TOOD: кастомная модель
                    return (
                        <Col style={{marginBottom: "6px"}} md={2} sm={4} xs={6}>
                            <img onClick={() => {
                                setCurrentReferalLink(undefined);
                                setSelectedProject(project);
                                if (project.currentUserReferrals.length !== 0) {
                                    setBinareChance(project.currentUserReferrals[0].chance);
                                    setRightChain(project.currentUserReferrals[1].url);
                                    setLeftChain(project.currentUserReferrals[0].url);
                                } else {
                                    setBinareChance(50);
                                    setRightChain("");
                                    setLeftChain("");
                                }
                                if (selectedProject && selectedProject.id === project.id) {
                                    setSelectedProject(undefined);
                                    setBinareChance(undefined);
                                    setRightChain("");
                                    setLeftChain("");
                                }
                            }} style={{width: "50px", cursor: "pointer", borderRadius: 10}}
                                 src={"/api/content/" + project.projectIcon} alt={project.name}/>
                        </Col>
                    )
                }) : null}
            </div>
            <div style={{paddingLeft: "20px", width: "100%"}}>
                {selectedProject && <Panel shaded bordered bodyFill className={"projectIsOpen"}>
                    <img style={{width: "30%", float: "left", borderRadius: 10}}
                         src={"/api/content/" + selectedProject.projectIcon}
                         alt={selectedProject.name}/>
                    <div style={{textAlign: "center", marginBottom: "3%"}}>
                        <Row>
                            <h4 style={{marginBottom: "18px", color: "#ffffff"}}>{selectedProject.name}</h4>
                            <span style={{color: "#e9b370"}}>{selectedProject.shortDesc}<br/>
                                    </span>
                            {/*<Button style={{*/}
                            {/*    backgroundColor: "#48DD00",*/}
                            {/*    color: "black",*/}
                            {/*    fontWeight: "bold",*/}
                            {/*    marginTop: "10%"*/}
                            {/*}}*/}
                            {/*        onClick={console.log}>Подробнее</Button><br/>*/}
                        </Row>
                        <Row style={{marginTop: "3%"}}>
                            <Col md={24}>
                                {currentReferalLink ? <span
                                        style={{
                                            margin: "0 auto",
                                            fontSize: "16px",
                                            width: "30%",
                                            border: "solid 1px white",
                                            borderRadius: "100px",
                                            padding: "10px 40px 10px 40px"
                                        }}
                                        onClick={() => {
                                            navigator.clipboard.writeText(currentReferalLink);
                                        }}>{currentReferalLink}</span>
                                    : <Button
                                        style={{
                                            margin: "0 auto",
                                            backgroundColor: "#501c84",
                                        }} onClick={() => {
                                        if (selectedProject?.leaderReferal) {
                                            setCurrentReferalLink(selectedProject.leaderReferal);
                                            return
                                        }
                                        regOnProject(selectedProject.id).then((data) => {
                                            if (data) {
                                                Alert.success("Вы были закреплены за проектом", 1500);
                                                setCurrentReferalLink(data);
                                            } else {
                                                Alert.warning("Реферальных ссылок к этому проекту еще не существует", 2000);
                                            }
                                        }).catch((error) => {
                                            Alert.error("Что-то пошло не так", 1500);
                                            console.log(error)
                                        })
                                    }
                                    }>Получить реферальную ссылку</Button>

                                }</Col><br/>
                            <span style={{
                                display: "inline-block",
                                marginBottom: "1%",
                                marginTop: "2%",
                                fontSize: 18
                            }}>Реферальные ссылки</span><br/>
                            {/*<div style={{marginBottom: "1%"}}>*/}
                            {/*    <Icon style={{width: "20%", color: "#ed002f"}} icon='long-arrow-down' rotate={30}*/}
                            {/*          size={"2x"}/>*/}
                            {/*    <Icon style={{width: "20%", color: "#48DD00"}} icon='long-arrow-down' rotate={330}*/}
                            {/*          size={"2x"}/>*/}
                            {/*</div>*/}
                            <div style={{
                                width: "25%",
                                margin: "auto",
                                borderRight: "2px solid #a09a9c",
                                borderLeft: "2px solid #a09a9c",
                                borderTop: "2px solid #a09a9c",
                                height: "50px"
                            }}>
                            </div>
                            <InputGroup inside style={{margin: "0 auto", width: "calc(50% - 5px)"}}>
                                <InputGroup inside style={{marginRight: "10px"}}>
                                    <Input style={{backgroundColor: "transparent"}}
                                           value={leftChain}
                                           onChange={(value) => {
                                               setLeftChain(value)
                                           }}
                                    />
                                    <InputGroup.Addon>
                                        <Whisper placement={"bottom"}
                                                 speaker={<Tooltip>Введите реферальную ссылку для левой
                                                     ветки</Tooltip>}>
                                            <AiFillInfoCircle/>
                                        </Whisper>
                                    </InputGroup.Addon>
                                </InputGroup>
                                <InputGroup inside>
                                    <Input
                                        style={{backgroundColor: "transparent"}}
                                        value={rightChain}
                                        onChange={(value) => {
                                            setRightChain(value)
                                        }}
                                    />
                                    <InputGroup.Addon>
                                        <Whisper placement={"bottom"}
                                                 speaker={<Tooltip>Введите реферальную ссылку для правой
                                                     ветки</Tooltip>}>
                                            <AiFillInfoCircle/>
                                        </Whisper>
                                    </InputGroup.Addon>
                                </InputGroup>
                            </InputGroup>
                            <span style={{display: "inline-block", marginTop: "3%", marginBottom: "1%"}}>Выберите вероятность выбора ветки</span>
                            <Slider onChange={(value) => {
                                setBinareChance(value);
                            }}
                                    defaultValue={50}
                                    value={binareChance}
                                    style={{margin: "0 auto", width: "50%"}} progress/>
                            <Button style={{marginTop: 20}}
                                    onClick={() => {
                                        if (!(leftChain && rightChain && selectedProject)) {
                                            Alert.warning("Одна из веток не заполнена", 2000)
                                            return
                                        }
                                        const rightChance = binareChance;
                                        const leftChance = 100 - (binareChance ? binareChance : 100);
                                        const leftObject = {
                                            referralToken: leftChain,
                                            localId: 0,
                                            dropChance: leftChance
                                        } as ReferalModel;
                                        const rightObject = {
                                            referralToken: rightChain,
                                            localId: 1,
                                            dropChance: rightChance
                                        } as ReferalModel;
                                        const form = {links: [leftObject, rightObject]} as ReferalAddLinks;
                                        console.log(binareChance, leftChance, rightChance, leftObject, rightObject);
                                        setReferalToProject(selectedProject.id, form).then(() => {
                                            if (!hasUserInviteCode) {
                                                permanentReloadUser();
                                            }
                                            Alert.success("Данные обновлены", 2000);
                                            refreshFnProject();
                                        }).catch((err) => {
                                            Alert.error("Что-то пошло не так", 2000);
                                            console.log(err);
                                        })
                                    }}>Задать
                            </Button>
                        </Row>
                    </div>
                </Panel>}
            </div>
        </div>
    );
}
