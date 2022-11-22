import axios, { AxiosResponse } from "axios";
import { GetTodo } from "../../types/todos.type";

export const getTodo = async (id: string): Promise<AxiosResponse<GetTodo>> => {
    try{
        const response = await axios.get(`http://localhost:8080/api/todo/${id}`);

        return response;
    } catch (error) {
        throw error;
    }
}

