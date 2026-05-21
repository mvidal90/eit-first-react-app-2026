import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API
})

export const setToken = (token) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    localStorage.setItem("token", token)
}

export const removeToken = () => {
    delete api.defaults.headers.common["Authorization"]
    localStorage.removeItem("token")
}