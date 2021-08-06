export interface MessageInterface {
    message:string,
    code:number,
}

export interface RegModel {
    login:string,
    password:string,
    firstName:string,
    lastName:string,
    middleName:string,
    email:string,
    inviteCode:string,
    redirectUrl:string
}

export interface LoginModel {
    login?:string,
    email?:string,
    password:string,
    isNotMyDevice?:boolean
}

export interface UserModel {
    id:number,
    fullName:string,
    login:string,
    email:string,
    isActive:string,
    role:string,
    inviteToken:string,
    isActiveBool:boolean

}

export interface ProjectModel {
    id:number,
    name:string,
    author:UserModel,
    scope:number,
    invokerReferal?:string,
    userReferal?:string,
    invokerUser?:UserModel
}

export interface UpdateUserModel {
    login:string,
    password?:string,
    firstName:string,
    lastName:string,
    middleName:string,
    email?:string
}