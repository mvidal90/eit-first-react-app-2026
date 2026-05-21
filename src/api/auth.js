import { api } from "./index"

export const postLogin = async (data) => {
    const response = await api.post("/auth/login", data)
    console.log(response)
    return response.data
}

export const revalidateSession = async (token) => {
    const response = await api.get("/auth/revalidate-session", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(response)
    return response.data
}