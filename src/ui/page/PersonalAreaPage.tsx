import React, {useState, useEffect, useRef, FC} from 'react';
import {HashRouter as Router} from "react-router-dom";
import {logOutUser, permanentReloadUser, userHook} from "../../api/UserApi";
import {Button, Icon, IconButton, Input, InputGroup, Panel, PanelGroup} from "rsuite";
import {UserModel} from "../../api/models";
import {LoginComponent} from "../component/LoginComponent";

export const PersonalAreaPage = () => {
    const [user, setUser] = useState<UserModel|number>(1);
    userHook(setUser,user);
    if (user === -1) {
        return <div className={"loginPage"}>
            <LoginComponent/>
        </div>
    }
    else if (user === 1) {
        return (
            <div
                style={{width: "100vw", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Icon icon={"wheelchair-alt"} size={"5x"} spin/>
            </div>
        )
    }
    const normilizedUser = user as UserModel;
    return (
        <div className={"personalAreaPage"}>
            <span style={{color:"white"}}><h3>Привет, {normilizedUser.fullName}!</h3></span>
            <PanelGroup accordion>
                <Panel bodyFill shaded header={<span>Личные данные</span>}>
                    <PersonalDataComponent defaultValue={normilizedUser}/>
                </Panel>
                <Panel bodyFill shaded header={<span>Проекты</span>} defaultExpanded>
                    <ProjectsComponent/>
                </Panel>
                <Panel bodyFill shaded header={<span>Команда</span>}>
                    <CommandComponent/>
                </Panel>
            </PanelGroup>
        </div>
    );
}