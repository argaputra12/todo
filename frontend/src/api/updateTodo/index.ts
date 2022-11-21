import axios, { AxiosResponse } from "axios";
import { getTodo } from "api/getTodo";
import { TodoBody, updateTodoResult } from "../../types/todos.type";

const TodoStatus = {
    COMPLETED: true,
    INCOMPLETE: false
}

export const updateTodo = async (id: string): Promise<AxiosResponse<updateTodoResult>> => {
    try{
        
        const todoData = await getTodo(id);
        
        if(todoData.status === 200){

            const todo = todoData.data.result;
            const body : TodoBody = {
                title: todo.title,
                description: todo.description,
                status: todo.status === TodoStatus.COMPLETED ? TodoStatus.INCOMPLETE : TodoStatus.COMPLETED
            }

            return await axios.put(`http://localhost:8080/api/update-todo/${id}`, body);

        } else {
            throw new Error("Todo not found");
        }

    } catch (error) {
        throw error;
    }
}