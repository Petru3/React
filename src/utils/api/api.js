import axios from "axios"

const config = {
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json"
    },
}

let api = axios.create(config)

api.interceptors.response.use(
    (res) => res,
    (err) => (Promise.reject(err)))

export default api