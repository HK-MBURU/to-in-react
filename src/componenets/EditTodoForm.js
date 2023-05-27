import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue]=useState(task.task)
    const handleSubmit=e=>{
        e.preventDefault()
        editTodo(value,task.id);
        setValue("")
    }
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder='Update Task' onChange={(e)=>setValue(e.target.value)
        } className="todo-input" />
        <button type='submit' className="todo-btn">Update Task</button>
    </form>
  )
}
