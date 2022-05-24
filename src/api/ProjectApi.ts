import {RESTRequest} from "./RestConnector";
import {MessageInterface, ReferalAddLinks, RefProject} from "./models";


export const getProjects = () => {
    return new Promise((resolve, reject) => {
        RESTRequest("GET", "/project/info?withTokens=true").then((response) => {
                resolve(response.data)
            }
        ).catch((error) => {
            reject(error.data)
        });
    });
}


export const setReferalToProject = (pid: number, chances: ReferalAddLinks): Promise<Array<RefProject>> => {
    return new Promise<Array<RefProject>>((resolve, reject) => {
        RESTRequest("POST", "/project/" + pid + "/token", chances)
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

export const regOnProject = (id: number): Promise<string> => {
    return new Promise<string>((resolve, reject)=> {
        RESTRequest("PUT", `/project/${id}/reg`).then((data)=>{
            resolve(data.data)
        }).catch((error)=>{
            reject(error.data)
        });
    });
}
