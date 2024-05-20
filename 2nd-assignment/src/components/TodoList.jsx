import TodoItem from "./TodoItem";

const TodoList = ({ title, todos, setTodos }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
