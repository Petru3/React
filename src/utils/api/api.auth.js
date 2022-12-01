import api from "./api";

export async function Login(credentials){
    const response = await api.post("http://localhost:5000/auth/login", credentials)
    return response
}

export async function Logout(){
    const response = await api.post("http://localhost:5000/auth/logout")
    return response
}