import React, {useState, useEffect, useRef, FC} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, Schema, ButtonToolbar, Button, Alert} from 'rsuite';
import {useHistory, useParams} from "react-router-dom";
import {checkLoginAndMail, startRegistrationUser, userHook} from "../../api/UserApi";
import PasswordStrengthBar from 'react-password-strength-bar';
import {UserEntity} from "../../api/models";
import {useAsyncRequest} from "../../util/useAsyncRequest";

const {StringType} = Schema.Types;

const regModel = Schema.Model({
    login: StringType().isRequired("Это поле обязательно для заполнения!")
        .addRule((value, data) => {
            return checkLoginAndMail({login: value}, "login");
        }, "Указанный логин уже используется"),
    email: StringType()
        .isRequired("Это поле обязательно для заполнения!")
        .isEmail("Пожалуйста, введите правильный адрес электронной почты")
        .addRule((value, data) => {
            return checkLoginAndMail({mail: value}, "mail");
        }, "Указанная почта уже используется"),
    password: StringType().isRequired('Это поле обязательно для заполнения!'),
    verifyPassword: StringType().addRule((value, data) => {
        return value == data.password;
    }, "Пароли не совпадают!").isRequired("Это поле обязательно для заполнения!"),
    firstName: StringType().isRequired("Это поле обязательно для заполнения!"),
    lastName: StringType().isRequired("Это поле обязательно для заполнения!"),
    middleName: StringType().isRequired("Это поле обязательно для заполнения!"),
    numberPhone: StringType().isRequired("Это поле обязательно для заполнения!")
        .addRule((value, data) => {
            return checkLoginAndMail({phone: value}, "phone");
        }, "Указанный номер телефона уже используется").
        addRule((value, data)=> {
            return value.length >= 11 && value.length <= 12;
        }, "Указанный номер телефона содержит неверное количество символов")
});

export const RegistrationPage = () => {
    //let {refcode} = useParams<{ refcode?: string }>();
    const [formData, setFormData] = useState<any>(undefined);
    const [formError, setFormError] = useState<any>(undefined);
    const [token, setToken] = useState();
    const [psd, setPsd] = useState("")
    const history = useHistory();
    userHook((usr: UserEntity | number) => {
        if (usr && usr !== -1)
            history.push("/lk")
    }, 1);

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js?render=6Ldz7CUcAAAAAG3QV6h9Fi9jXfehsTgXUvtSTY7F"
        document.body.appendChild(script)
    }, [])

    // if (!refcode) {
    //     return (
    //         <span>Регистрация досупна только по реферальной ссылке</span>
    //     )
    // }
    return (
        <div className={"registrationPage"}>
            <Form
                onChange={formValue => {
                    setPsd(formValue?.password);
                    setFormData(formValue);
                }}
                onCheck={fe => {
                    setFormError(fe);
                }}
                formValue={formData}
                model={regModel}
            >
                <FormGroup>
                    <ControlLabel>Фамилия</ControlLabel>
                    <FormControl name={"lastName"}/>
                    <HelpBlock>{formError?.lastName}</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Имя</ControlLabel>
                    <FormControl name={"firstName"}/>
                    {/*<HelpBlock>{formError?.firstName}</HelpBlock>*/}
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Отчество</ControlLabel>
                    <FormControl name={"middleName"}/>
                    {/*<HelpBlock>{formError?.middleName}</HelpBlock>*/}
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Номер телефона</ControlLabel>
                    <FormControl checkAsync={true} name={"numberPhone"}/>
                    {/*<HelpBlock>{formError?.numberPhone}</HelpBlock>*/}
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Логин</ControlLabel>
                    <FormControl checkAsync={true} name={"login"}/>
                    {/*<HelpBlock>{formError?.login}</HelpBlock>*/}
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Пароль</ControlLabel>
                    <FormControl type={"password"} name={"password"}/>
                    <HelpBlock>
                        <PasswordStrengthBar scoreWords={["Отвратительный", "Ужасный", "Плохой", "Пойдёт", "Отличный"]}
                                             password={psd}
                                             shortScoreWord={"Хуже некуда"}
                        />
                    </HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Проверка пароля</ControlLabel>
                    <FormControl type={"password"} name={"verifyPassword"}/>
                    {/*<HelpBlock>{formError?.verifyPassword}</HelpBlock>*/}
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Почта</ControlLabel>
                    <FormControl checkAsync={true} name={"email"}/>
                    {/*<HelpBlock>{formError?.email}</HelpBlock>*/}
                </FormGroup>
                <ButtonToolbar>
                    <Button appearance="primary" onClick={() => {
                        if (Object.keys(formError).length !== 0) {
                            Alert.error("Форма не заполнена или заполнена с ошибками", 1500);
                            return
                        }
                        // @ts-ignore
                        window.grecaptcha.ready(_ => {
                            // @ts-ignore
                            window.grecaptcha
                                .execute("6Ldz7CUcAAAAAG3QV6h9Fi9jXfehsTgXUvtSTY7F", { action: "reg" })
                                // @ts-ignore
                                .then(token => {
                                    formData.captcha = token;
                                    formData.redirectUrl = "http://"+window.location.host+"#/risks?user=mail"
                                    //formData.inviteCode = refcode;
                                    startRegistrationUser(formData).then(() => {
                                        Alert.success("Регистрация прошла успешна!", 1500);
                                        setTimeout(() => {
                                            history.push("/risks")
                                        }, 1050)
                                    }).catch((err) => {
                                        Alert.error("Регистрация не завершена. Что-то пошло не так.");
                                        console.log(err)
                                    })
                                })
                        })

                    }}>
                        Зарегистрироваться
                    </Button>
                </ButtonToolbar>
            </Form>
        </div>
    );
}