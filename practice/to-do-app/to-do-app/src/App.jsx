import { useState } from 'react'
import './App.css'
import ToDoList from './Components/ToDoList'
function App() {

  const handleFormSubmit = todo => {
    console.log(todo);
  }

  return (
    <div className="todo-app">
      <ToDoList onSubmit={handleFormSubmit} />
    </div>

  )
}

export default App
