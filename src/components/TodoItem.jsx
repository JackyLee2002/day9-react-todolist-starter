import "./TodoItem.css";
import { TodoContext } from "../App";
import { useContext } from "react";

export default function TodoItem({ todo }) {
  const { state, dispatch } = useContext(TodoContext);

  const handleTodoDoneToggle = () => {
    dispatch({ type: "TOGGLE", payload: todo.id });
  };

  const handleTodoRemove = () => {
    dispatch({ type: "REMOVE", payload: todo.id });
  };

  return (
    <div>
      <button
        className={!!todo.done ? "todo-done" : ""}
        id={todo.id}
        onClick={handleTodoDoneToggle}
        style={{
          marginRight: "10px",
          width: "200px",
          textWrap: "wrap",
        }}
      >
        {todo.text}
      </button>
      <button
        onClick={handleTodoRemove}
        style={{ backgroundColor: "grey", width: "fit-content" }}
      >
        X
      </button>
    </div>
  );
}
