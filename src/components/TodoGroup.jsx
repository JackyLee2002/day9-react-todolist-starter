import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";

export default function TodoGroup() {
  const { state: todoItems } = useContext(TodoContext);

  return (
    <div>
      {todoItems && todoItems.length > 0 && todoItems != []
        ? todoItems.map((todo, idx) => {
            return <TodoItem todo={todo} key={todo.id + idx} />;
          })
        : "There is no todo item!"}
    </div>
  );
}
