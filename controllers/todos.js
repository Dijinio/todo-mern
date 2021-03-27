const mongoose = require("mongoose");
const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  const { content } = req.body;
  const newTodo = new Todo({ content });

  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post with that Id");

  try {
    await Todo.findByIdAndRemove(id);
    res.json({ message: "Item was successfully deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const completeTodo = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post with that Id");

  const todo = await Todo.findById(id);
  todo.completed = !todo.completed;

  try {
    const completedTodo = await Todo.findByIdAndUpdate(id, todo, { new: true });
    res.status(201).json(completedTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getTodos, createTodo, deleteTodo, completeTodo };
