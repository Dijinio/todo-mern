const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  completeTodo,
} = require("../controllers/todos");

const router = express.Router();

router.get("/", getTodos);
router.post("/create", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/complete", completeTodo);

module.exports = router;
