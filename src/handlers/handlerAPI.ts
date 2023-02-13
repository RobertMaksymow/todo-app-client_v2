import { Todo } from "../model";

const baseurl = "/api/todos";

export const loadTodosAPI = () => {
  const data = fetch(baseurl, { method: "GET" })
    .then((response) => {
      // return response.text();
      return response.json();
    })
    .catch((error) => {
      // error.text();
      console.log(error);
    });
  return data;
};

export const createTodoAPI = (todo: Todo) => {
  return fetch(baseurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
      todo: todo.todo,
      is_completed: todo.isCompleted,
      priority: todo.priority,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      console.log("CREATED TODO: ", todo);
    });
};

export const updateTodo = (todo: Todo) => {
  console.log("UPDATE TODO: ", todo);
  return fetch(`${baseurl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: todo.id,
      todo: todo.todo,
      is_completed: todo.isCompleted,
      priority: todo.priority,
    }),
  }).then((response) => response.json());
};

export const deleteTodo = (id: number) => {
  return fetch(`${baseurl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      // return response.text();
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
