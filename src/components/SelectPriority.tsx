import { useState } from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SelectPriority = ({ todo, todos, setTodos }: Props) => {
  const [priority, setPriority] = useState<number>(0);
  console.log("Before handle priority:", priority, typeof priority);

  const handlePriorityChange = (event: number) => {
    setPriority(event);

    //HAVE A LOOK AT THIS CODE HERE:
    // setTodos(
    //   todos.map((todo) => (todo.id === id ? { ...todo, todo: priority } : todo))
    // );
    //HAVE A LOOK AT THIS CODE HERE:
    // todo.priority = priority;
    todo.priority = event;
    console.log("TEMP", event, typeof event, "PRIORITY", priority);
  };
  console.log(todos);
  return (
    <span className="priority_selector">
      <select
        value={priority}
        onChange={(event) => handlePriorityChange(Number(event.target.value))}
      >
        <option value={0}>Low</option>
        <option value={1}>Medium</option>
        <option value={2}>High</option>
      </select>
      <label>priority</label>
    </span>
  );
};

export default SelectPriority;
