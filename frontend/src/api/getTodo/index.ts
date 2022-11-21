import axios, { AxiosResponse } from "axios";
import { getTodoResult } from "../../types/todos.type";

export const getTodo = async (id: string): Promise<AxiosResponse<getTodoResult>> => {
    try{
        const response = await axios.get(`http://localhost:8080/api/todos/${id}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

