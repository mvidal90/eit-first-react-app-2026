import axios from "axios";

const axiosInstance = axios.create({})

export const getTodos = async (search) => {
    const response = await axiosInstance.get(`https://698e6503aded595c2531c0eb.mockapi.io/api/todos?search=${search}`)
    return response.data
}