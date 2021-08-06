import axios from 'axios';


type sendMethod = "POST"|"GET"|"PUT"|"DELETE"
export const RESTRequest = (method:sendMethod, url:string, body?:object|null) =>{
    return axios(
        {
            method: method,
            url: "/info_back" + url,
            headers: headerGenerator(),
            data: body
        }
    );
}

const headerGenerator =() =>{
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

}