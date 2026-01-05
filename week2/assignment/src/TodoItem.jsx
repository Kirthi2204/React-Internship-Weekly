const TodoItem = ({ todo, toggleComplete, deleteTodo, startEdit }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className="title">{todo.title}</span>
        <span className="description">{todo.description}</span>
      </div>
      <div className="actions">
        <button onClick={() => startEdit(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
