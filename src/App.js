import { createContext, useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NotFound from "./components/NotFound";
import { initialState, todoReducer } from "./context/todoReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import DoneList from "./components/DoneList";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/todo" />} />
            <Route path="/done" element={<DoneList />} />
            <Route path="/todo" element={<TodoList />} />
          </Routes>
        </Router>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
