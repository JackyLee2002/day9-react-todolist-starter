import axios from "axios";
const APIBaseURL = "http://localhost:8080";

const axiosClient = axios.create({ baseURL: APIBaseURL });

export const fetchTodos = async () => {
  const response = await axiosClient.get("/todos");
  return response.data;
};

export const addTodo = async (text) => {
  const response = await axiosClient.post("/todos", {
    id: null,
    text: text,
    done: false,
  });
  return response.data;
};

export const editTodo = async (todo) => {
  const response = await axiosClient.put(`/todos/${todo.id}`, todo);
  console.log(todo);
  return response.data;
};

export const deleteTodo = async (todo) => {
  const response = await axiosClient.delete(`/todos/${todo.id}`);
  return response.data;
};
