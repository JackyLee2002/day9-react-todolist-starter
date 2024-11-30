import axios from "axios";
const APIBaseURL = "https://674afafe71933a4e88540652.mockapi.io/api/v1";

const axiosClient = axios.create({ baseURL: APIBaseURL });

export const fetchTodos = async () => {
  try {
    const response = await axiosClient.get("/todos");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
