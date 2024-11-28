import { useContext, useState } from "react";
import { TodoContext } from "../App";

export default function TodoGenerator() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
