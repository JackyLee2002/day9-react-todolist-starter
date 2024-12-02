import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import { Flex, Pagination, Progress } from "antd";

const PAGE_SIZE = 3;

export default function TodoGroup() {
  const { state: todoItems } = useContext(TodoContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const percentage =
    (todoItems.filter((todo) => todo.done).length / todoItems.length) * 100;

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const items = todoItems.slice(startIndex, endIndex);
    setCurrentItems(items);

    if (items.length === 0 && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [todoItems, currentPage]);

  return (
    <div>
      <Flex gap="small" wrap style={{ justifyContent: "center" }}>
        <Progress
          style={{
            padding: "20px 0px",
          }}
          type="circle"
          percent={percentage.toPrecision(4)}
        />
      </Flex>
      {currentItems.length > 0
        ? currentItems.map((todo, idx) => {
            return <TodoItem todo={todo} key={todo.id + idx} />;
          })
        : "There is no todo item!"}
      <Pagination
        style={{
          padding: "10px 0px",
          justifyContent: "center",
        }}
        current={currentPage}
        pageSize={PAGE_SIZE}
        total={todoItems.length}
        onChange={handleChange}
      />
    </div>
  );
}
