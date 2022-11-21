import axios from "axios";
import { Todos } from "types/todos.type"

export const getTodos = async (): Promise<Todos> => {
    try{
        const response = await axios.get("http://localhost:8080/api/todos");

        return response.data;
    } catch (error) {
        throw error;
    }
}