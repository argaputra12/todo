interface Todo{
    _id: string;
    title: string;
    description: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Todos {
    todos: Todo[];
}

export interface getTodoResult {
    result: Todo;
}

export interface TodoBody {
    title: string;
    description: string;
    status: boolean;
}

export interface updateTodoResult {
    result: Todo;
}