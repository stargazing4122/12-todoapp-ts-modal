import { FC, useReducer } from 'react'
import { todosInit } from '../init/todosInit';
import { todosReducer } from '../reducers/todosReducer';
import { TodoContext } from './TodoContext';


interface Props {
  children: JSX.Element | JSX.Element[];
}


export const TodoProvider: FC<Props> = ({ children }) => {

  //hooks
  const [todosState, todosDispatch] = useReducer( todosReducer, [], todosInit)
  const value = {
    todosState,
  }
  return (
    <TodoContext.Provider value={ value }>
      { children }
    </TodoContext.Provider>
  )
}
