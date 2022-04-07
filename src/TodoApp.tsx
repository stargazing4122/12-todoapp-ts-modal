import React from 'react'
import { TodoScreen } from './components/TodoScreen'
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <>
      <TodoProvider>
        <TodoScreen />
      </TodoProvider>
    </>
  )
}
