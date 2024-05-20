const todoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  const deletetodo = () => {
    setTodos((e) => e.filter((todo) => todo.id !== id));
  };

  const completetodo = () => {
    setTodos((e) =>
      e.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      
      <div>
        <button onClick={completetodo}>{isDone ? "취소" : "완료"}</button>
        <button onClick={deletetodo}>삭제</button>
      </div>
    </div>
  );
};

export default todoItem;
