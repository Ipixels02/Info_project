import React, {FC, useState} from "react";
import {Icon, IconButton, Input, Grid, Placeholder, Row, Col, Button, Alert} from "rsuite";
import {UserEntity, UserInfoUpdateModel, LoginModel} from "../../api/models";
import {updateDataUser} from "../../api/UserApi";

const {Paragraph} = Placeholder;

interface PersonalDataComponentInterface {
    defaultValue?: UserEntity
}


export const PersonalDataComponent: FC<PersonalDataComponentInterface> = ({defaultValue}) => {

    // @ts-ignore
    const [lastName, setlastName] = useState(defaultValue?.lastName);
    const [lne, setlne] = useState(false);
    // @ts-ignore
    const [firstName, setFirstName] = useState(defaultValue?.firstName)
    const [fn, setfn] = useState(false);
    // @ts-ignore
    const [middleName, setMiddleName] = useState(defaultValue?.middleName)
    const [mn, setmn] = useState(false);

    const [accountData, setAccountData] = useState<any>(undefined);
    const [login, setLogin] = useState(defaultValue?.login)
    const [lg, setlg] = useState(false);
    const [email, setEmail] = useState(defaultValue?.mail)
    const [ems, setems] = useState(false);
    const [password, setPassword] = useState("");
    const [ps, setps] = useState(false);

    if (!defaultValue) {
        return <Paragraph/>
    }

    return (
        <Grid style={{padding: "20px", fontSize: 18}}>
            <RenderCustomInput name={"Фамилия"} isEdit={lne} setEdit={setlne} variable={lastName}
                               variablseSet={setlastName}/>
            <RenderCustomInput name={"Имя"} isEdit={fn} setEdit={setfn} variable={firstName}
                               variablseSet={setFirstName}/>
            <RenderCustomInput name={"Отчество"} isEdit={mn} setEdit={setmn} variable={middleName}
                               variablseSet={setMiddleName}/>
            <RenderCustomInput name={"Логин"} isEdit={lg} setEdit={setlg} variable={login} variablseSet={setLogin}/>
            <RenderCustomInput name={"Пароль"} isEdit={ps} setEdit={setps} variable={password} variablseSet={setPassword}/>
            <RenderCustomInput name={"Почта"} isEdit={ems} setEdit={setems} variable={email} variablseSet={setEmail}/>
            <Button onClick={() => {
                updateDataUser({
                    login: login,
                    lastName: lastName,
                    firstName: firstName,
                    middleName: middleName,
                    email: defaultValue?.mail === email ? undefined : email
                } as UserInfoUpdateModel).then(() => {
                    Alert.success("Ваши данные успешно изменены", 1500)
                }).catch((err) => {
                    Alert.error("Данные не изменены");
                    console.log(err)
                })
            }} color={"red"} appearance="primary">Сохранить измененеия</Button>
        </Grid>
    )
}

interface RenderCustomInputInterFace {
    isEdit: boolean,
    setEdit: Function,
    variable: any,
    variablseSet: Function,
    type?: string
    name: string
}

const RenderCustomInput: FC<RenderCustomInputInterFace> = ({isEdit, setEdit, variable, variablseSet, type, name}) => {
    if (isEdit) {
        return <Row style={{marginTop: "10px"}}>
            <Col md={4} xs={6}>
                <span>{name}:</span>
            </Col>
            <Col md={12} xs={19}>
                <Input onPressEnter={() => {
                    setEdit(false)
                }
                } type={type} value={variable} onChange={(val) => {
                    variablseSet(val)
                }}/>
            </Col>
            <Col md={1} xs={1}>
                <IconButton onClick={() => setEdit(!isEdit)} icon={<Icon icon={"close"}/>}/>
            </Col>
        </Row>
    } else {
        return <Row style={{marginTop: "10px"}}>
            <Col md={4} xs={6}>
                <span>{name}:</span>
            </Col>
            <Col md={12} xs={19}><span>{variable}</span></Col>
            <Col md={1} xs={1}><IconButton style={{background: "transparent"}} onClick={() => setEdit(!isEdit)} icon={<Icon icon={"edit"}/>}/></Col>
        </Row>

    }
}