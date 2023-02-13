import React, { useState, useRef, useEffect } from "react";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone, MdOutlineRemoveDone } from "react-icons/md";
import "./TodoItem.css";

import { Todo } from "../../model";
import SelectPriority from "./SelectPriority";
import { deleteTodo, updateTodo } from "../../handlers/handlerAPI";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const [done, setDone] = useState<boolean>(todo.isCompleted);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

    // updateTodo(todo);
    updateTodo({
      id: id,
      todo: todo.todo,
      isCompleted: done,
      priority: todo.priority,
    });
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    console.log("Todo to update: ", todo);
    event.preventDefault(); //Prevents screen being refreshed

    // updateTodo(todo).then(() => {
    //   setTodos(
    //     todos.map((todo) =>
    //       todo.id === id ? { ...todo, todo: editTodo } : todo
    //     )
    //   );
    // });
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    console.log("EditTodo: ", editTodo);
    console.log("Todo after update: ", todo);
    updateTodo({
      id: id,
      todo: editTodo,
      isCompleted: todo.isCompleted,
      priority: todo.priority,
    });

    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    deleteTodo(todo.id);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(event) => handleEdit(event, todo.id)}
    >
      {edit ? (
        <input
          className="todos__single--text"
          value={editTodo}
          ref={inputRef}
          onChange={(event) => setEditTodo(event.target.value)}
        />
      ) : todo.isCompleted ? (
        <s className="todos__single--text">
          {todo.id}: {todo.todo}
        </s>
      ) : (
        <span className="todos__single--text">
          {todo.id}: {todo.todo}
        </span>
      )}

      <div className="icon__all">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isCompleted) {
              setEdit(!edit);
            }
          }}
        >
          <FiEdit />
          edit
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiOutlineDelete />
          delete
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
            if (todo.isCompleted) {
              setDone(true);
            } else {
              setDone(false);
            }
          }}
        >
          {todo.isCompleted === true ? (
            <MdOutlineRemoveDone />
          ) : (
            <MdOutlineDone />
          )}
          done
        </span>
        <span className="icon">
          <SelectPriority todo={todo} todos={todos} setTodos={setTodos} />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
