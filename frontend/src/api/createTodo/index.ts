import axios, { AxiosResponse } from "axios";
import { TodoBody } from "../../types/todos.type";

export const createTodo = async (data: TodoBody): Promise<void> => {
    try{

        return await axios.post("http://localhost:8080/api/create-todo", data);
        
    } catch (error) {
        throw error;
    }

}