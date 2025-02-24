import React, { useState } from 'react';

function ClickCounterTodoList() {
  const [clickCount, setClickCount] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoMessage, setTodoMessage] = useState('');

  const handleIncrementClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleDecrementClick = () => {
    setClickCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim()) {
      setTodoList([...todoList, todoInput]);
      setTodoInput('');
      setTodoMessage('');
    } else {
      setTodoMessage('Please enter a task.');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <p>Button clicked {clickCount} times</p>

      <h1>User Input Form</h1>
      <input
        type="text"
        value={userInput}
        onChange={handleUserInputChange}
        placeholder="Enter user input"
      />
      <p>{userInput}</p>

      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoInput}
          onChange={handleTodoInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add to To-Do List</button>
      </form>
      <p style={{ color: 'red' }}>{todoMessage}</p>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClickCounterTodoList;