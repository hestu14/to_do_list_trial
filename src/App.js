import { findByLabelText } from '@testing-library/react';
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
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column"
    }}>
      <h1 style={{
        color: "white"
      }}>React To Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
