import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        { id: Date.now(), todo: todo, isCompleted: false, priority: 0 },
      ]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
