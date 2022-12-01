import api from "./api";

export async function GetTutors(){
    const response = await api.get("/tutors")
    return response
}

export async function GetTutor(username){
    const response = await api.get(`/tutors/${username}`)
    return response
}

export async function GetStudents(){
    const response = await api.get("/students")
    return response
}

export async function GetStudent(username){
    const response = await api.get(`/students/${username}`)
    return response
}

export async function GetAdmins(){
    const response = await api.get("/admins")
    return response
}

export async function DeleteUser(type, username){
    if(type !== "student" && type !== "tutor") throw Error("failed to identify user type (student || tutor)")
    const response = await api.delete(`/admins/delete-${type}/${username}`)
    return response
}