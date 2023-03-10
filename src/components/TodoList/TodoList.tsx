import React from "react";
import { Todo } from "../../model";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <li>
          <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
