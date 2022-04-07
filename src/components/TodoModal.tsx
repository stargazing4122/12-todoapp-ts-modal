import React, { FormEvent, useContext, useEffect } from 'react'

import Modal from 'react-modal';
import { TodoContext } from '../context/TodoContext';
import { doUiCloseModal } from '../actions/uiActions';
import { doTodoEditCleanEdit } from '../actions/todoEditActions';
import { useForm } from '../hooks/useForm';
import { Todo } from '../interfaces/interfaces';
import { doTodosUpdateTodo } from '../actions/todosActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const initForm = {
  todoName: '',
}

export const TodoModal = () => {

  // hooks
  const { uiState, todoEditState, todosDispatch, uiDispatch, todoEditDispatch } = useContext(TodoContext);
  const {formValues, handleInputChange, setFormValues} = useForm(  initForm );
  const { todoName } = formValues;

  useEffect(() => {
    if( todoEditState.todoEdit ) {
      setFormValues( {
        todoName: todoEditState.todoEdit.todoName,
      })
    } else {
      setFormValues( initForm );
    }
    
  }, [todoEditState.todoEdit, setFormValues])

  // functions
  const closeModal = () => {
    uiDispatch( doUiCloseModal() );
    todoEditDispatch( doTodoEditCleanEdit() );
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: todoEditState.todoEdit?.id || (new Date().getTime()).toString(), 
      todoName,
      state: todoEditState.todoEdit?.state || false,
    }
    todosDispatch( doTodosUpdateTodo( newTodo ) );
    closeModal();
  }
  return (
    <Modal
      isOpen={ uiState.openModal }
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      //
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h2 className="mb-4">Edit Todo</h2>
      <form onSubmit={ handleFormSubmit }>
        <input 
          className="form-control mb-3"
          type="text"
          name="todoName"
          value={ todoName }
          onChange={ handleInputChange }
        />
        <div className="d-grid gap-2">
          <button 
            className="btn btn-info"
            type="submit"
          >Save</button>
        </div>
      </form>
    </Modal>
  )
}
