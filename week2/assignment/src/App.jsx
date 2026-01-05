import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTodos } from "./hooks/useTodos";
import "./App.css";

function App() {
  const { todos, addTodo, editTodo, deleteTodo, toggleComplete, search, setSearch, filter, setFilter, activeCount } = useTodos();
  const [editingTodo, setEditingTodo] = useState(null);
  const handleAddOrEdit = (title, description) => {
    if (editingTodo) {
      editTodo(editingTodo.id, { title, description });
      setEditingTodo(null);
    } else {
      addTodo(title, description);
    }
  };

  const startEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="app">
      <h2>Todo Application</h2>
      <TodoForm onSubmit={handleAddOrEdit} editTodo={editingTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} startEdit={startEdit} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} activeCount={activeCount} />
    </div>
  );
}

export default App;
