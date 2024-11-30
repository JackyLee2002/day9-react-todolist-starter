import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { Link } from "react-router-dom";

const TodoList = () => {
  return (
    <div>
      This is the TodoList Component.
      <TodoGroup />
      <TodoGenerator />
      <Link to="/done">Check your done list</Link>
    </div>
  );
};

export default TodoList;
