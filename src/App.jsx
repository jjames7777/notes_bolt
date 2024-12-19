import React, { useState, useEffect } from 'react';

    const App = () => {
      const [todos, setTodos] = useState([]);
      const [inputValue, setInputValue] = useState('');

      useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
      }, []);

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

      const addTodo = () => {
        if (inputValue.trim()) {
          setTodos([...todos, inputValue]);
          setInputValue('');
        }
      };

      const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

      return (
        <div className="container">
          <h1>Todo List</h1>
          <div className="add-todo">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
          </div>
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
          ))}
        </div>
      );
    };

    export default App;
