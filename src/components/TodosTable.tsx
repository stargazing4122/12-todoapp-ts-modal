import React from 'react'

export const TodosTable = () => {
  return (
    <>
      <h2>List of Todos</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ new Date().getTime() }</td>
            <td>Learn english</td>
            <td>❌✔️</td>
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
        </tbody>
      </table>
    </>
  )
}
