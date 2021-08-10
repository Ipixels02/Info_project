import React, {FC, useState} from "react";
import {Icon, IconButton, Input, Grid, Placeholder, Row, Col} from "rsuite";
import {UserModel} from "../../api/models";

const {Paragraph} = Placeholder;

interface PersonalDataComponentInterface {
    defaultValue?: UserModel
}


export const PersonalDataComponent: FC<PersonalDataComponentInterface> = ({defaultValue}) => {

    const names = defaultValue?.fullName.split(" ");
    // @ts-ignore
    const [lastName, setlastName] = useState(names[0]);
    const [lne, setlne] = useState(false);
    // @ts-ignore
    const [firstName, setFirstName] = useState(names[1])
    const [fn, setfn] = useState(false);
    // @ts-ignore
    const [middleName, setMiddleName] = useState(names[2])
    const [mn, setmn] = useState(false);

    const [login, setLogin] = useState(defaultValue?.login)
    const [lg, setlg] = useState(false);
    const [email, setEmail] = useState(defaultValue?.email)
    const [ems, setems] = useState(false);
    const [password, setPassword] = useState("");

    if (!defaultValue) {
        return <Paragraph/>
    }

    return (
        <Grid style={{padding: "20px"}}>
            <RenderCustomInput name={"Фамилия"} isEdit={lne} setEdit={setlne} variable={lastName}
                               variablseSet={setlastName}/>
            <RenderCustomInput name={"Имя"} isEdit={fn} setEdit={setfn} variable={firstName}
                               variablseSet={setFirstName}/>
            <RenderCustomInput name={"Отчество"} isEdit={mn} setEdit={setmn} variable={middleName}
                               variablseSet={setMiddleName}/>
            <RenderCustomInput name={"Логин"} isEdit={lg} setEdit={setlg} variable={login} variablseSet={setLogin}/>
            <RenderCustomInput name={"Почта"} isEdit={ems} setEdit={setems} variable={email} variablseSet={setEmail}/>
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
        return <Row style={{marginTop:"10px"}}>
            <Col xs={4}>
                <span>{name}:</span>
            </Col>
            <Col xs={12}>
                <Input type={type} value={variable} onChange={(val) => {
                    variablseSet(val)
                }}/>
            </Col>
            <Col xs={4}>
                <IconButton onClick={() => setEdit(!isEdit)} icon={<Icon icon={"close"}/>}/>
            </Col>
        </Row>
    } else {
        return <Row style={{marginTop:"10px"}}>
            <Col xs={4}>
                <span>{name}:</span>
            </Col>
            <Col xs={12}><span>{variable}</span></Col>
            <Col xs={4}><IconButton onClick={() => setEdit(!isEdit)} icon={<Icon icon={"edit"}/>}/></Col>
        </Row>

    }
}