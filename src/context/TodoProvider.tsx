import { FC, useEffect, useReducer } from 'react'
import { todosInit } from '../init/todosInit';
import { UiState, TodoEditState } from '../interfaces/interfaces';
import { todoEditReducer } from '../reducers/todoEditReducer';
import { todosReducer } from '../reducers/todosReducer';
import { uiReducer } from '../reducers/uiReducer';
import { TodoContext } from './TodoContext';


interface Props {
  children: JSX.Element | JSX.Element[];
}


export const TodoProvider: FC<Props> = ({ children }) => {

  //hooks
  const [todosState, todosDispatch] = useReducer( todosReducer, [], todosInit);
  useEffect(() => {
    localStorage.setItem( 'list-todos-ts', JSON.stringify(todosState));
  }, [todosState])

  const [uiState, uiDispatch] = useReducer(uiReducer, { openModal: false});
  const [todoEditState, todoEditDispatch] = useReducer(todoEditReducer, {todoEdit: null})

  const value = {
    todosState,
    todosDispatch,

    uiState,
    uiDispatch,

    todoEditState,
    todoEditDispatch,
  }
  return (
    <TodoContext.Provider value={ value }>
      { children }
    </TodoContext.Provider>
  )
}
