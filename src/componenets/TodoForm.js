import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault()
        addTodo(value);
        setValue("")
    }
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder='What is the task Today ?' onChange={(e)=>setValue(e.target.value)
        } className="todo-input" />
        <button type='submit' className="todo-btn">Add Task</button>
    </form>
  )
}
