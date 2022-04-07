
export const Form = () => {
  return (
    <div>
      <h2>Add a new todo</h2>
      <form>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Input a todo ..."
        />
        <div className="d-grid gap-2">
          <button 
            className="btn btn-success"
            type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
