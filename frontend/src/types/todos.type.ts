interface Todo{
    _id: string;
    title: string;
    description: string;
    status: "completed" | "incomplete";
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
    status?: string;
}