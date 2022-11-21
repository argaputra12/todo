import bodyParser from "body-parser";
import { Router } from "express";
import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from "../controllers/todos";

const router = Router();

const jsonParser = bodyParser.json();

router.get("/api/todos", getTodos);

router.get("/api/todos/:id", getTodo);

router.post("/api/create-todo", jsonParser, createTodo);

router.put("/api/update-todo/:id", jsonParser,updateTodo);

router.delete("/api/delete-todo/:id", jsonParser,deleteTodo);

export default router;