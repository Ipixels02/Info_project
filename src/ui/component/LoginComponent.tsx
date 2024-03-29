import React, {useState, useEffect, useRef, FC} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, Schema, Alert } from 'rsuite';
import {loginUser} from "../../api/UserApi";
import {LoginModel} from "../../api/models";
import {useAsyncRequest} from "../../util/useAsyncRequest";
const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    username: StringType().isRequired('Поле обязательно для заполнения.'),
    password: StringType().isRequired('Поле обязательно для заполнения.')
});


const convertFromToLoginModel =(form:any, token:string):LoginModel => {
    const isMail = form.username.match("[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}\\.[a-z]{2,}")
    return {
        password:form.password,
        login: isMail?null:form.username,
        email: isMail?form.username:null,
        captcha: token
    };
}

export const LoginComponent:FC = () =>{
    const [formData, setFormData] = useState<any>(undefined);
    const [captcha, setCaptcha] = useState<string | undefined>(undefined);
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js?render=6Ldz7CUcAAAAAG3QV6h9Fi9jXfehsTgXUvtSTY7F"
        document.body.appendChild(script)
    }, [])

    const [pendingUser,errorUser,dataUser,refreshFnUser] = useAsyncRequest(async ()=>{
        if (captcha) {
            return  loginUser(convertFromToLoginModel(formData, captcha));
        }
    },undefined,[captcha]);


    useEffect(()=>{
       if(errorUser)
           Alert.error("Связка логин - пароль не найдена",1500);
    },[errorUser])

    return (
        <Form model={model} onChange={formValue => {setFormData(formValue)}}
              formValue = {formData}>
            <FormGroup>
                <ControlLabel>Логин или почта</ControlLabel>
                <FormControl name="username" style={{ width: 250 }} />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Пароль</ControlLabel>
                <FormControl name="password" type="password" style={{ width: 250 }} />
            </FormGroup>
            <Button onClick={()=>{
                const checked = model.check(formData);
                if(checked.password.hasError) {
                    Alert.error("Не введён пароль!",1500);
                    return
                }
                if(checked.username.hasError){
                    Alert.error("Не введён логин или почта!",1500);
                    return;
                }
                // @ts-ignore
                window.grecaptcha.ready(_ => {
                    // @ts-ignore
                    window.grecaptcha
                        .execute("6Ldz7CUcAAAAAG3QV6h9Fi9jXfehsTgXUvtSTY7F", { action: "log" })
                        // @ts-ignore
                        .then(token => {
                            setCaptcha(token);
                        })
                })

            }} style={{ width: 250 }}>Войти</Button>
        </Form>
    )
}