import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, startEdit, search, setSearch, filter, setFilter, activeCount }) => {
  return (
    <div className="todo-list">
      <div className="controls">
        <input type="text" placeholder="Search tasks" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <div className="filters">
          <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>All</button>
          <button onClick={() => setFilter("Active")} className={filter === "Active" ? "active" : ""}>Active</button>
          <button onClick={() => setFilter("Completed")} className={filter === "Completed" ? "active" : ""}>Completed</button>
        </div>
        <div>Active Tasks: {activeCount}</div>
      </div>
      <div>
        {todos.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} startEdit={startEdit} />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
