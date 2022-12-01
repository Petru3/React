import api from "./api"

export async function GetAssessments(){
    const response = await api.get("http://localhost:5000/assessments")
    return response
}

export async function GetAssessment(aid){
    const response = await api.get(`http://localhost:5000/assessments/${aid}`)
    return response
}

export async function CreateAssessment(data){
    const response = await api.post(`http://localhost:5000/assessments`, data)
    return response
}

export async function DeleteAssessment(aid){
    const response = await api.delete(`http://localhost:5000/assessments/${aid}`)
    return response
}