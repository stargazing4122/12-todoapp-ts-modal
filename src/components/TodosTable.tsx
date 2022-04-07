import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { RowTodo } from './RowTodo';

export const TodosTable = () => {

  // hooks
  const { todosState } = useContext(TodoContext);

  return (
    <>
      <h2>List of Todos</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            todosState.map( todo => (
              <RowTodo  
                key={todo.id}
                todo={ todo }
              />
            ))
          }
        </tbody>
      </table>
    </>
  )
}
