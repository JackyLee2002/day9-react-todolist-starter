import { useContext } from "react";
import { TodoContext } from "../App";

export default function DoneList() {
  const { state } = useContext(TodoContext);

  const doneTodos = (state) =>
    state
      .filter(({ done }) => done)
      .map(({ id, text }) => <p key={id}>DONE : {text}</p>);

  return (
    <>
      <h1>Todo Done List</h1>
      <h3>
        You have completed a total of {doneTodos(state).length} task
        {doneTodos(state).length > 1 && "s"}
      </h3>
      {doneTodos(state)}
    </>
  );
}
