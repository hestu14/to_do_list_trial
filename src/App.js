import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodo] = useState([]);

  function addTodo(todo) {
    setTodo ([todo, ...todos]);
  }



  return (
    <div className="App">
      <h1>React To Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
