import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  return (
    <div>
      ToDo List
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
};

export default TodoList;
