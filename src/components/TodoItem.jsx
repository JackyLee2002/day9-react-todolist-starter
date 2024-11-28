import "./TodoItem.css";
import { TodoContext } from "../App";
import { useContext } from "react";
import { REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM_DONE } from "../utils/todoActions";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  const handleTodoDoneToggle = () => {
    dispatch({ type: TOGGLE_TODO_ITEM_DONE, payload: todo.id });
  };

  const handleTodoRemove = () => {
    dispatch({ type: REMOVE_TODO_ITEM, payload: todo.id });
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
