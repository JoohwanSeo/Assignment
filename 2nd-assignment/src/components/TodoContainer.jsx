import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const workTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <h1>Todo</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList title="work" todos={workTodos} setTodos={setTodos} />
      <TodoList title="done" todos={doneTodos} setTodos={setTodos} />
    </div>
  );
};

export default TodoContainer;
``