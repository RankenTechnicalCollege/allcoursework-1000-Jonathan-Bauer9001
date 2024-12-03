import React, {useState, useRef, useEffect} from 'react'

const ToDoForm = (props) => {
  const[input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
 
  return (
    <div>
      <form action="" className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input 
               type="text"
               name="addToDo" 
               id="addToDo" 
               placeholder='Update ToDo' 
               value={input} 
               className='todo-input' 
               onChange={handleChange} 
               ref={inputRef}
               />
        <button className="todo-button">Update ToDo</button>
        </>)
        :
        (<>
          <input 
                 type="text"
                 name="addToDo" 
                 id="addToDo" 
                 placeholder='Add a ToDo' 
                 value={input} 
                 className='todo-input' 
                 onChange={handleChange} 
                 ref={inputRef}
                 />
          <button className="todo-button">Add ToDo</button>
          </>)}
      </form>
    </div>
  )
}

export default ToDoForm