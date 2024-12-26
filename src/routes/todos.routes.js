import express from "express"
import { addTodo, editTodo, deleteTodo, getAllTodo, SingleTodo } from "../controllers/todos.controllers.js"

const router = express.Router()

router.post('/todo' , addTodo)
router.put('/todo/:id' , editTodo)
router.delete('/todo/:id' , deleteTodo)
router.get('/todo', getAllTodo)
router.get('/todo/:id',SingleTodo)

export default router;