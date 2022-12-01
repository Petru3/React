import api from "./api";

export async function InsertUser(type, credentials){
    if(type !== "admin" && type !== "tutor" && type !== "student"){
        throw Error("failed to check type -> (admin, student, tutor)")
    }

    const response = await api.post(`/admins/insert-${type}`, credentials)
    return response
}