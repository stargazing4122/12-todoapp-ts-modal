import React, { FC, useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../interfaces/interfaces'
import { doTodosToggleState } from '../actions/todosActions';

interface Props {
  todo: Todo;
}
export const RowTodo: FC<Props> = ({ todo }) => {

  // hooks
  const { todosDispatch } = useContext(TodoContext);
  const { id, todoName, state } = todo;

  // functions
  const handleToggleClick = () => {
    todosDispatch( doTodosToggleState( id ));
  }

  return (
    <tr>
      <td>{ id }</td>
      <td>{ todoName }</td>
      <td> { state ? '✔️' : '❌'} </td>
      <td>
        <button
          className="btn btn-success"
          type="button"
          onClick={ handleToggleClick }
        >
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </button>
        <button
          className="btn btn-info"
          type="button"
        >
          <i className="fa-solid fa-pencil"></i>
        </button>
        <button
          className="btn btn-danger"
          type="button"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  )
}
