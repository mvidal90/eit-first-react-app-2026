import { api } from "./index"

export const postLogin = async (data) => {
    const response = await api.post("/auth/login", data)
    return response.data
}