import React from 'react'
import { HomeScreen } from './components/HomeScreen'
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <>
      <TodoProvider>
        <HomeScreen />
      </TodoProvider>
    </>
  )
}
