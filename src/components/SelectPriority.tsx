import { useState } from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  //   todos: Todo[];
  //   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SelectPriority = ({ todo }: Props) => {
  const [priority, setPriority] = useState<number>(0);
  console.log("Before handle priority:", priority, typeof priority);

  const handlePriorityChange = (event: any) => {
    const temp = event;
    console.log(
      "Priority selected(event.target.value): ",
      event.target.value,
      typeof event.target.value
    );
    setPriority(event.target.value);
    console.log("Inside handle priority", todo);
    console.log("Priority:", priority, typeof priority);
  };

  return (
    <span className="priority_selector">
      <select
        value={priority}
        onChange={(event) => handlePriorityChange(event)}
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
