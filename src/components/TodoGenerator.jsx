import { useContext, useState } from "react";
import { TodoContext } from "../App";
import { ADD_TODO_ITEM } from "../utils/todoActions";

export default function TodoGenerator() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }
    dispatch({ type: ADD_TODO_ITEM, payload: text });
    setText("");
  };

  return (
    <div>
      <input
        style={{ width: "250px" }}
        maxLength={100}
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
