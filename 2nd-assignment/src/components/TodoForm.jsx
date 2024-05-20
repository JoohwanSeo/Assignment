import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !content) return alert("제목과 내용 모두 적어주세요.");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTodos((prevTodo) => [nextTodo, ...prevTodo]);

    setTitle("");
    setContent("");
  };

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const inputContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        제목 <input type="text" value={title} onChange={inputTitle} />
        내용 <input type="text" value={content} onChange={inputContent} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoForm;
