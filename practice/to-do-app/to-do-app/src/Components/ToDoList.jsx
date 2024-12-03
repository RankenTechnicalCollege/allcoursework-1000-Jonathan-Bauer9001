import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    };
    const newToDos = [todo, ...todos]

    setTodos(newToDos);
    console.log(todo, ...todos);
  };

  const removeToDo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }
  
  const updateToDo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }
  const completeToDos = id => {
    let updatedToDos = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;

    });
    setTodos(updatedToDos)
  }

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <ToDoForm onSubmit={addToDo}/>
      <ToDo todos = {todos}
            completeToDos = {completeToDos}
            removeToDo = {removeToDo}
            updateToDo = {updateToDo}
      />

    </div>
  )
}

export default ToDoList