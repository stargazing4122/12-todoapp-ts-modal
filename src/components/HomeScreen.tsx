import React from 'react'
import { Form } from './Form'
import { TodosTable } from './TodosTable'

export const HomeScreen = () => {
  return (
    <>
      <h1 className="text-center text-info">TodoApp</h1>
      <div className="row">

        <div className="col-8">
          <TodosTable />
        </div>

        <div className="col-4">
          <Form />
        </div>

      </div>
    </>
  )
}
