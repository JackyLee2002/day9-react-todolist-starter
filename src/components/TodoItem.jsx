import "./TodoItem.css";
import { TodoContext } from "../App";
import { editTodo } from "../api/todos";
import { useContext, useState } from "react";
import { Modal, Input, Button } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodoText, setEditTodoText] = useState("");

  const showModal = () => {
    setEditTodoText(todo.text);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (!editTodoText || editTodoText.length === 0) {
      return;
    }
    setLoadingEdit(true);
    dispatch({
      type: "EDIT",
      payload: await editTodo({ ...todo, text: editTodoText }),
    });
    setLoadingEdit(false);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleTodoDoneToggle = () => {
    dispatch({ type: "TOGGLE", payload: todo.id });
  };

  const handleTodoRemove = () => {
    dispatch({ type: "REMOVE", payload: todo.id });
  };

  const onEditChange = (event) => {
    setEditTodoText(event.target.value);
  };

  return (
    <div style={{ marginBottom: "5px", marginTop: "5px" }}>
      <Modal
        title="Edit Todo Item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: todo.text === editTodoText }}
        loading={loadingEdit}
      >
        Original Text: {todo.text}
        <Input
          type="text"
          size="large"
          onChange={onEditChange}
          defaultValue={todo.text}
          value={editTodoText}
          style={{ marginTop: "10px" }}
        />
      </Modal>
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
      <Button
        color="warning"
        variant="solid"
        onClick={showModal}
        style={{ marginRight: "15px" }}
      >
        <EditOutlined />
      </Button>
      <Button color="success" variant="solid" onClick={handleTodoRemove}>
        <CloseOutlined />
      </Button>
    </div>
  );
}
