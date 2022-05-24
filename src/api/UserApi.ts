import {
    checkModel,
    LoginModel,
    MessageInterface,
    ProjectEntity,
    RegModel,
    UserInfoUpdateModel,
    UserEntity
} from "./models";
import {RESTRequest} from "./RestConnector";


let currentUser: UserEntity | number;

let hooksUserGet: Set<Function> = new Set<Function>();


export const userHook = (callback: Function, oldState: UserEntity | number) => {
    if (currentUser && oldState !== currentUser) {
        callback(currentUser);
    }
    hooksUserGet.add(callback);
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

const updateUser = (dataUser: UserEntity | number) => {
    currentUser = dataUser;
    hooksUserGet.forEach(elem => {
        elem(currentUser)
    })
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

export const checkLoginAndMail = (form: checkModel, checkField: string): Promise<boolean> => {
    return new Promise((resolve) => {
        RESTRequest("POST", "/auth/reg/used", form).then((response) => {
                resolve(true)
                console.log(response)
            }
        ).catch((error) => {
            resolve(false)
            console.log(error)
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

export const loginUser = (form: LoginModel): Promise<UserEntity | MessageInterface> => {
    return new Promise<UserEntity>((resolve, reject) => {
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

export const getUserGroup = (userId?: number): Promise<UserEntity> => {
    const mbId = userId ? "?userId=" + userId : "";
    return new Promise<UserEntity>(((resolve, reject) => {
        RESTRequest("GET", "/account/group" + mbId
        ).then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const getUserProjects = (): Promise<Array<ProjectEntity>> => {
    return new Promise<Array<ProjectEntity>>(((resolve, reject) => {
        RESTRequest("GET", "/account/projects").then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const getUserById = (userId: number): Promise<UserEntity> => {
    return new Promise<UserEntity>(((resolve, reject) => {
        RESTRequest("GET", "/account/" + userId).then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const updateDataUser = (form: UserInfoUpdateModel): Promise<UserEntity | MessageInterface> => {
    return new Promise<UserEntity | MessageInterface>(((resolve, reject) => {
        RESTRequest("PUT", "/account/", form).then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const updateValidDataUser = (code: string): Promise<MessageInterface> => {
    return new Promise<MessageInterface>(((resolve, reject) => {
        RESTRequest("GET", "/account/update-valid?code=" + code).then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}

export const activateUser = (userId: number): Promise<MessageInterface> => {
    return new Promise<MessageInterface>(((resolve, reject) => {
        RESTRequest("PUT", "/account/" + userId + "/activate").then((response) => {
                resolve(response.data);
            }
        ).catch((error) => {
            reject({message: error.data, code: error.status})
        });
    }));
}