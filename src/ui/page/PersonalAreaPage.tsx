import React, {useState, useEffect, useRef, FC} from 'react';
import {HashRouter as Router} from "react-router-dom";
import {logOutUser, permanentReloadUser, userHook} from "../../api/UserApi";
import {Button, Icon} from "rsuite";
import {UserModel} from "../../api/models";
import {LoginComponent} from "../component/LoginComponent";

export const PersonalAreaPage = () => {
    const [user, setUser] = useState<UserModel|number>(1);
    userHook(setUser,user);
    if (user === -1) {
        return <div
            style={{width: "100vw", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
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
        <>
            <div style={{height: "64px", width: "100%"}}/>
            <div>
                <span>Добрый день, {normilizedUser.fullName}!</span>
                <br/>
                <span>Почта, {normilizedUser.email}!</span>
                <br/>
                <Button onClick={()=>{logOutUser()}}>Выйти</Button>
            </div>
        </>
    );
}