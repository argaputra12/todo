import { Request, Response } from "express";

import TodoModel from "../../models/todo";
import { Todo } from "../../types/todo";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: Todo[] = await TodoModel.find();
        res.status(200).json({ todos });
    } catch (error) {
        throw error;
    }
}

export const getTodo = async (req: Request, res: Response): Promise<void> => {
    await TodoModel.findById(req.params.id, (err, todo) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).json({ todo });
        }
    });
}

export const createTodo = async (req: Request, res: Response): Promise<void> => {
    const body = req.body as Pick<Todo, "title" | "description" | "status">;

    if(!body.title || !body.status) {
        res.status(400).json({
            message: "Title and Status are required"
        });
        return;
    }

    const todo: Todo = new TodoModel({
        title: body.title,
        description: body.description,
        status: body.status
    });

    try {
        const newTodo: Todo = await todo.save();
        const allTodos: Todo[] = await TodoModel.find();

        res.status(201).json({
            message: "Todo added",
            addedTodo: newTodo,
            todos: allTodos
        });
    } catch (error) {
        throw error;
    }
}