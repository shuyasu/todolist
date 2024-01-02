import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
      <h3 >{todo.title}</h3>
      <p1 >{todo.desc}</p1>
      <button className='btn btn-sm btn-danger'>delete</button>
       
    </div>
  )
}

export default TodoItem
