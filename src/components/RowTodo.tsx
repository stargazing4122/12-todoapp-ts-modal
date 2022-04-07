import React, { FC } from 'react'
import { Todo } from '../interfaces/interfaces'

interface Props {
  todo: Todo;
}
export const RowTodo: FC<Props> = ({ todo }) => {

  const { id, todoName, state } = todo;
  return (
    <tr>
      <td>{ id }</td>
      <td>{ todoName }</td>
      <td> { state ? '✔️' : '❌'} </td>
      <td>
        <button
          className="btn btn-success"
          type="button"
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
