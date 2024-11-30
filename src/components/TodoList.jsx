import { useEffect, useContext } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { TodoContext } from "../App";
import { fetchTodos } from "../api/todos";
import { TODOACTIONS } from "../context/todoReducer";

const TodoList = () => {
  const { dispatch } = useContext(TodoContext);

  useEffect(() => {
    fetchTodos().then((todos) => {
      dispatch({ type: TODOACTIONS.INITIALIZE, payload: todos });
    });
  }, []);

  return (
    <div>
      This is the TodoList Component.
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
};

export default TodoList;
