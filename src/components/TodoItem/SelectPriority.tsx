import { useState } from "react";
import { Todo } from "../../model";
import { updateTodoAPI } from "../../handlers/handlerAPI";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SelectPriority = ({ todo }: Props) => {
  const [priority, setPriority] = useState<number>(todo.priority);

  const handlePriorityChange = (event: number) => {
    setPriority(event);

    updateTodoAPI({
      id: todo.id,
      todo: todo.todo,
      is_completed: todo.is_completed,
      priority: event,
    }).then(() => {});
  };

  return (
    <span className="priority_selector">
      <select
        value={priority}
        disabled={todo.is_completed}
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
