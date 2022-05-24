import React, {useState, useEffect, useRef, FC} from 'react';
import {HashRouter as Router} from "react-router-dom";
import {logOutUser, permanentReloadUser, userHook} from "../../api/UserApi";
import {Alert, Button, Col, Icon, IconButton, Input, InputGroup, Panel, PanelGroup, Row} from "rsuite";
import {UserEntity} from "../../api/models";
import {LoginComponent} from "../component/LoginComponent";
import {useAsyncRequest} from "../../util/useAsyncRequest";
import {getProjects} from "../../api/ProjectApi";
import {PersonalDataComponent} from "../component/PersonalDataComponent";
import {CommandComponent} from "../component/CommandComponent";
import {ProjectsComponent} from "../component/ProjectsComponent"
import {AiFillCopy} from "react-icons/ai";
import {HiOutlineArrowRight} from "react-icons/hi";

export const PersonalAreaPage = () => {
    const [user, setUser] = useState<UserEntity | number>(1);
    userHook(setUser, user);

    const [pendingProjcet, errorProject, dataProject, refreshFnProject] = useAsyncRequest(async () => {
        return getProjects();
    }, undefined, undefined);

    useEffect(() => {
        refreshFnProject();
    }, []);

    if (user === -1) {
        return <div className={"loginPage"}>
            <LoginComponent/>
        </div>
    } else if (user === 1) {
        return (
            <div className={"loginPageLoading"}>
                <Icon icon={"wheelchair-alt"} size={"5x"} spin/>
            </div>
        )
    }
    const normilizedUser = user as UserEntity;
    return (
        <div className={"personalAreaPage"}>
            <Row>
                <Col md={6} xs={24}>
                    <span style={{color: "white"}}>
                        <h3>Привет, {normilizedUser.lastName + " " + normilizedUser.firstName}!</h3>
                    </span>
                </Col>
                <Col md={10}>
                    <span style={{}}>{normilizedUser.cash.cashValue}</span>
                </Col>
                <Col style={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center" }} md={6} xs={24}>
                    <div onClick={() => {
                        if (!normilizedUser.inviteToken) {
                            Alert.warning("Чтобы получить ссылку приглашения, необходимо указать хотя бы одну ссылку для проекта", 2000);
                            return
                        }
                        navigator.clipboard.writeText("http://" + window.location.host + window.location.pathname + "#/reg/" + normilizedUser.inviteToken.url);
                        Alert.success("Ссылка скопирована", 2000);
                    }} className={"getReferralButton"}>
                        <span>Скопировать приглашение</span>
                        <AiFillCopy style={{marginLeft: "10px"}} size={35}/>
                    </div>
                </Col>
                <Col md={2} xs={24}>
                    <Button style={{float: "right"}} appearance={"primary"} onClick={() => {
                        logOutUser();
                    }}>Выход</Button>
                </Col>
            </Row>
            <PanelGroup accordion>
                <Panel bodyFill shaded header={<span style={{fontSize: 19}}>Личные данные</span>}>
                    <PersonalDataComponent defaultValue={normilizedUser}/>
                </Panel>
                <Panel bodyFill shaded header={<span style={{fontSize: 19}}>Проекты</span>} defaultExpanded>
                    <ProjectsComponent hasUserInviteCode={normilizedUser.inviteToken !== undefined}/>
                </Panel>
                <Panel bodyFill shaded header={<span style={{fontSize: 19}}>Команда</span>}>
                    <CommandComponent currentUser={normilizedUser}/>
                </Panel>
            </PanelGroup>
        </div>
    );
}