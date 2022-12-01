import api from "../api/api";

export function SetAuthToken(token) {
    if(token){
        api.defaults.headers.common['token'] = token
        localStorage.setItem('token', token)
    }else{
        delete api.defaults.headers.common['token']
        localStorage.removeItem('token')
    }
}