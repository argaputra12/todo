import axios, { AxiosResponse } from 'axios';

export const deleteTodo = async (id: string): Promise<AxiosResponse> => {
    try{
        return await axios.delete(`http://localhost:8080/api/delete-todo/${id}`);
    } catch (error) {
        throw error;
    }
}
