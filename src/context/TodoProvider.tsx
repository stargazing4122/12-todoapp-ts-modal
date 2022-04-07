import { FC } from 'react'
import { TodoContext } from './TodoContext';


interface Props {
  children: JSX.Element | JSX.Element[];
}


export const TodoProvider: FC<Props> = ({ children }) => {
  return (
    <TodoContext.Provider value={{}}>
      { children }
    </TodoContext.Provider>
  )
}
