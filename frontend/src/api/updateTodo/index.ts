import axios from "axios";
import { getTodo } from "api/getTodo";
import { TodoBody } from "../../types/todos.type";

const TodoStatus = {
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
}

export const updateTodo = async (id: string): Promise<void> => {
    try{
        
        const todoData = await getTodo(id);
        
        if(todoData.status === 200){

            const todo = todoData.data.todo;
            const body : TodoBody = {
                title: todo.title,
                description: todo.description,
            }

            todo.status === TodoStatus.COMPLETED ? body.status = TodoStatus.INCOMPLETE : body.status = TodoStatus.COMPLETED;

            return await axios.put(`http://localhost:8080/api/update-todo/${id}`, body);

        } else {
            throw new Error("Todo not found");
        }

    } catch (error) {
        throw error;
    }
}