const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  content: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
