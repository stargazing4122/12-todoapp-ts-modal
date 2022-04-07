import { FC, useContext } from 'react';

import Swal from 'sweetalert2';

import { TodoContext } from '../context/TodoContext';
import { Todo } from '../interfaces/interfaces';
import { doTodosDeleteTodo, doTodosToggleState } from '../actions/todosActions';
import { doUiOpenModal } from '../actions/uiActions';
import { doTodoEditSetEdit } from '../actions/todoEditActions';

interface Props {
  todo: Todo;
}
export const RowTodo: FC<Props> = ({ todo }) => {

  // hooks
  const { todosDispatch, uiDispatch, todoEditDispatch } = useContext(TodoContext);
  const { id, todoName, state } = todo;

  // functions
  const handleToggleClick = () => {
    todosDispatch( doTodosToggleState( id ));
  }

  const handleDeleteClick = () => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        todosDispatch( doTodosDeleteTodo( id ));
        Swal.fire(
          'Deleted!',
          'This todo has been deleted.',
          'success'
        )
      }
    })
  }
  
  const handleEditClick = () => {
    todoEditDispatch( doTodoEditSetEdit( todo ) );
    uiDispatch( doUiOpenModal() );
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
          onClick={ handleEditClick }
        >
          <i className="fa-solid fa-pencil"></i>
        </button>

        <button
          className="btn btn-danger"
          type="button"
          onClick={ handleDeleteClick }
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  )
}
