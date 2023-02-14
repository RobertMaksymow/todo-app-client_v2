import React, { useState, useRef, useEffect } from "react";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone, MdOutlineRemoveDone } from "react-icons/md";
import "./TodoItem.css";

import { Todo } from "../../model";
import SelectPriority from "./SelectPriority";
import { deleteTodoAPI, updateTodoAPI } from "../../handlers/handlerAPI";

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
    console.log("TODO BEFORE DONE", todo);
    updateTodoAPI(
      //   {
      //   id: id,
      //   todo: todo.todo,
      //   isCompleted: done,
      //   priority: todo.priority,
      // }
      todo
    );
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

    console.log("DONE: ", done);
    console.log("isCompleted: ", todo.todo, todo.isCompleted);
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    console.log("Todo to update: ", todo);
    event.preventDefault(); //Prevents screen being refreshed

    updateTodoAPI({
      id: id,
      todo: editTodo,
      isCompleted: todo.isCompleted,
      priority: todo.priority,
    }).then(() => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, todo: editTodo } : todo
        )
      );
      setEdit(false);
    });
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    deleteTodoAPI(todo.id);
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
            if (todo.isCompleted) {
              setDone(true);
            } else {
              setDone(false);
            }
            handleDone(todo.id);
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
        <span className="icon">created: date_here</span>
      </div>
    </form>
  );
};

export default TodoItem;
