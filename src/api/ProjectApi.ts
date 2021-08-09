import {RESTRequest} from "./RestConnector";


export const getProjects = () => {
    return new Promise((resolve, reject) => {
        RESTRequest("GET", "/project/info").then((response) => {
                resolve(response.data)
            }
        ).catch((error) => {
            reject(error.data)
        });
    });
}


export const addReferalToProject = (pid: number, refralUrl: string) => {
    return new Promise((resolve, reject) => {
        RESTRequest("POST", "/project/" + pid + "/token", {referalToken: refralUrl})
            .then((response) => {
                resolve(response.data)
            }
        ).catch((error) => {
            reject(error.data)
        });
    });
}

export const getContent = (name:string) => {
    return new Promise((resolve, reject) => {
        RESTRequest("GET", "/content/"+name,)
            .then((response) => {
                    resolve(response.data)
                }
            ).catch((error) => {
            reject(error.data)
        });
    });
}