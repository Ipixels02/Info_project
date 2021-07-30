import axios from 'axios';


type sendMethod = "POST"|"GET"|"PUT"|"DELETE"
export const RESTRequest = (method:sendMethod, url:string, body?:object|null) =>{
    return axios(
        {
            method: method,
            //url: url, //for prod
            url: "/rest" + url, //for prod
            headers: headerGenerator(),
            data: body
        }
    );
}

const headerGenerator =() =>{
    if (localStorage.authToken && localStorage.authToken !== "undefined") {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.authToken
        };
    }
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

}