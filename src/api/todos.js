import axios from "axios";
const APIBaseURL = "https://674afafe71933a4e88540652.mockapi.io/api/v1";

const axiosClient = axios.create({ baseURL: APIBaseURL });

export const fetchTodos = async () => {
  const response = await axiosClient.get("/todos");
  return response.data;
};

export const addTodo = async (text) => {
  const response = await axiosClient.post("/todos", { text: text });
  return response.data;
};

export const editTodo = async (todo) => {
  const response = await axiosClient.put(`/todos/${todo.id}`, todo);
  return response.data;
};

export const deleteTodo = async (todo) => {
  const response = await axiosClient.delete(`/todos/${todo.id}`);
  return response.data;
};
