import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";
import { createTodoAPI, loadTodosAPI } from "./handlers/handlerAPI";
import { Todo } from "./model";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      createTodoAPI({
        id: Date.now(),
        todo: todo,
        is_completed: false,
        priority: 1,
      }).then(() => {
        setTodos([
          ...todos,
          { id: Date.now(), todo: todo, is_completed: false, priority: 1 },
        ]);
        setTodo("");
      });
    }
  };

  useEffect(() => {
    loadTodosAPI().then((data) => {
      console.log("Loading Data from API: ", data);
      setTodos(data);
    });
  }, []);
  // console.log(todos);

  return (
    <div className="App">
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;

//check useContext hook
