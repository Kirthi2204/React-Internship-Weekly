import { useState, useEffect } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All"); // All, Active, Completed

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  }).filter(todo => 
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = todos.filter(todo => !todo.completed).length;

  return {
    todos: filteredTodos,
    addTodo,
    editTodo,
    deleteTodo,
    toggleComplete,
    search,
    setSearch,
    filter,
    setFilter,
    activeCount,
  };
};
