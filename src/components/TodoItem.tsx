import React from "react";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone, MdOutlineRemoveDone } from "react-icons/md";

import "./TodoItem.css";

import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">
        {todo.id}: {todo.todo}
        <div>
          <span className="icon">
            {" "}
            <FiEdit />
            edit
          </span>
          <span className="icon">
            <AiOutlineDelete />
            delete
          </span>
          <span className="icon">
            {todo.isCompleted === true ? (
              <MdOutlineRemoveDone />
            ) : (
              <MdOutlineDone />
            )}
            done
          </span>
        </div>
      </span>
    </form>
  );
};

export default TodoItem;
