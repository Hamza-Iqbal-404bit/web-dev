import { useState } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/todoList/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  }

  const toggleComplete = (id, completed) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    setTodos(updatedTodos);
  }
  const deleteTask = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="app-container">
      <h1>Todo App</h1>

      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />

    </div>

  )
}

export default App
