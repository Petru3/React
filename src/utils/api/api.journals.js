import api from "./api"

export async function GetErasmusJournals(){
    const response = await api.get("/erasmus-journals")
    return response
}

export async function GetErasmusJournal(ejid){
    const response = await api.get(`/erasmus-journals/${ejid}`)
    return response
}

export async function CreateErasmusJournal(data){
    const response = await api.post(`/erasmus-journals`, data)
    return response
}

export async function PatchErasmusJournal(ejid){
    const response = await api.patch(`/erasmus-journals/${ejid}`)
    return response
}

export async function DeleteErasmusJournal(ejid){
    const response = await api.delete(`/erasmus-journals/${ejid}`)
    return response
}

export async function GetPersonalJournals(){
    const response = await api.get(`personal-journals`)
    return response
}

export async function GetPersonalJournal(_pjid){
    const response = await api.get(`/personal-journals/${_pjid}`)
    return response
}