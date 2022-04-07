import { FormEvent, useContext } from 'react';
import { doTodosAddNewTodo } from '../actions/todosActions';
import { TodoContext } from '../context/TodoContext';
import { useForm } from '../hooks/useForm';
import { Todo } from '../interfaces/interfaces';

interface FormData {
  id: string;
  todo: string;
  state: boolean;
}

const initialForm: FormData= {
  id: '',
  todo: '',
  state: false,
}
export const Form = () => {

  // hooks
  const { formValues, handleInputChange, resetForm} = useForm<FormData>( initialForm );
  const { id, todo, state } = formValues;
  const { todosDispatch } = useContext(TodoContext);

  // functions
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: (new Date().getTime()).toString(),
      todoName: todo,
      state,
    }
    todosDispatch( doTodosAddNewTodo( newTodo ) );
    resetForm();
  }

  return (
    <div>
      <h2>Add a new todo</h2>
      <form onSubmit={ handleFormSubmit }>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Input a todo ..."
          name="todo"
          value={ todo }
          onChange={ handleInputChange }
        />
        <div className="d-grid gap-2">
          <button 
            className="btn btn-success"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
