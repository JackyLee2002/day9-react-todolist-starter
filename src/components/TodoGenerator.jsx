import { useContext, useState } from "react";
import { TodoContext } from "../App";

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
    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div>
      <input maxLength={100} type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
