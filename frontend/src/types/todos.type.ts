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

export interface GetTodo {
    todo: Todo;
}

export interface TodoBody {
    title: string;
    description: string;
    status?: boolean;
}