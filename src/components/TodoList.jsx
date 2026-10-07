function TodoList({ todos }) {
  return (
    <section className="card">
      <h2>Todo List</h2>

      {todos.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.completed ? "✅" : "⬜"} {todo.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoList;