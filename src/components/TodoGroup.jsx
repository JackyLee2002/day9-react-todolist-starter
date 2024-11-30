import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import { Flex, Pagination, Progress } from "antd";

const PAGE_SIZE = 3;

export default function TodoGroup() {
  const { state: todoItems } = useContext(TodoContext);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentItems = todoItems.slice(startIndex, endIndex);
  const percentage =
    (todoItems.filter((todo) => todo.done).length / todoItems.length) * 100;

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  // useeffect to check if state is updated, check if the current page's content is empty, if it is, go to the previous page
  useEffect(() => {
    if (currentItems.length === 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [todoItems]);

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
      {currentItems && currentItems.length > 0 && currentItems != []
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
