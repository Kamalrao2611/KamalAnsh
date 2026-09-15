import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") {
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(
      todos.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="todo-container">
      <h2>Our Todo List ❤️</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;