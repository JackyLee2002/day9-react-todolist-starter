import "./TodoItem.css";
import { TodoContext } from "../App";
import { useContext, useState } from "react";
import { Modal, Input, Button } from "antd";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { TODOACTIONS } from "../context/todoReducer";
import { editTodo, deleteTodo } from "../api/todos";

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
    const updatedTodoItem = { ...todo, text: editTodoText };
    const returnedTodoFromAPI = await editTodo(updatedTodoItem);
    dispatch({
      type: TODOACTIONS.EDIT,
      payload: returnedTodoFromAPI,
    });
    setLoadingEdit(false);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleTodoDoneToggle = async () => {
    await editTodo({ ...todo, done: !todo.done });
    dispatch({ type: TODOACTIONS.TOGGLE_DONE, payload: todo.id });
  };

  const handleTodoRemove = async () => {
    await deleteTodo(todo);
    dispatch({ type: TODOACTIONS.REMOVE, payload: todo.id });
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
