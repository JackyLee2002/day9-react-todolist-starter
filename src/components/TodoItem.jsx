import "./TodoItem.css";
import { TodoContext } from "../App";
import { useContext } from "react";

export default function TodoItem({ todo }) {
  const { state, dispatch } = useContext(TodoContext);

  const handleTodoDoneToggle = () => {
    dispatch({ type: "TOGGLE", payload: todo.id });
  };

  return (
    <button
      className={!!todo.done ? "todo-done" : ""}
      id={todo.id}
      onClick={handleTodoDoneToggle}
    >
      {todo.text}
    </button>
  );
}
