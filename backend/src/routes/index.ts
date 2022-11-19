import { Router } from "express";
import { getTodos } from "../controllers/todos";

const router = Router();

router.get("/api/todos", getTodos);

router.get("/api/todos/:id", getTodo);

router.post("/api/craete-todo", createTodo);

router.put("/api/update-todo/:id", updateTodo);

router.delete("/api/delete-todo/:id", deleteTodo);

export default router;