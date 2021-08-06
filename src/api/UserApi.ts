import {LoginModel, MessageInterface, ProjectModel, RegModel, UpdateUserModel, UserModel} from "./models";
import {RESTRequest} from "./RestConnector";


let currentUser: UserModel|number;

let hooksUserGet:Set<Function> = new Set<Function>();


export const userHook = (callback: Function,oldState:UserModel|number) => {
    if(currentUser&&oldState!==currentUser){
        callback(currentUser);
    }
    else{
        hooksUserGet.add(callback);
    }
}

export const permanentReloadUser = () => {
    RESTRequest("GET", "/account").then((response) => {
            updateUser(response.data);
        }
    ).catch((error) => {
        console.log(error);
        updateUser(-1);
    });
}

permanentReloadUser();

const updateUser = (dataUser: UserModel|number) => {
    currentUser = dataUser;
    hooksUserGet.forEach(elem=>{elem(currentUser)})
}

export const startRegistrationUser = (formData: RegModel): Promise<MessageInterface> => {
    return new Promise((resolve, reject) => {
        RESTRequest("POST", "/auth/reg", formData).then((response) => {
                resolve({message: response.data, code: response.status})
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    });
}

export const endRegistrationUserPromise = (code: string): Promise<MessageInterface> => {
    return new Promise((resolve, reject) => {
        RESTRequest("GET", "/auth/end-reg?confirmCode=" + code).then((response) => {
                resolve({message: "User registred", code: response.status})
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    });
}

export const endRegistrationUserRedirect = (code: string) => {
    window.location.replace("/auth/end-reg?confirmCode=" + code)
}

export const loginUser = (form: LoginModel): Promise<UserModel | MessageInterface> => {
    return new Promise<UserModel>((resolve, reject) => {
        RESTRequest("POST", "/auth/login", form).then((response) => {
                resolve(response.data);
                updateUser(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    })
}

export const logOutUser = (): Promise<MessageInterface> => {
    return new Promise<MessageInterface>((resolve, reject) => {
        RESTRequest("GET", "/auth/logout").then((response) => {
                resolve(response.data);
                updateUser(-1)
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    });
}

export const getUserGroup = ():Promise<Array<UserModel>> => {
    return new Promise<Array<UserModel>>(((resolve, reject) => {
        RESTRequest("GET", "/account/group").then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const  getUserProjects  = ():Promise<Array<ProjectModel>> => {
    return new Promise<Array<ProjectModel>>(((resolve, reject) => {
        RESTRequest("GET", "/account/projects").then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const getUserById = (userId:number):Promise<UserModel> => {
    return new Promise<UserModel>(((resolve, reject) => {
        RESTRequest("GET", "/account/"+userId).then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const updateDataUser = (form:UpdateUserModel):Promise<UserModel|MessageInterface> => {
    return new Promise<UserModel|MessageInterface>(((resolve, reject) => {
        RESTRequest("PUT", "/account/",form).then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const updateValidDataUser = (code:string):Promise<MessageInterface> => {
    return new Promise<MessageInterface>(((resolve, reject) => {
        RESTRequest("GET", "/account/update-valid?code="+code).then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}