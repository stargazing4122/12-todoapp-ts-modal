import { Todo } from "../interfaces/interfaces";

export type TodosAction =
  | {
      type: 'add todo';
      payload: Todo;
    }

// synchronous actions

export const doTodosAddNewTodo = ( todo: Todo ): TodosAction => ({
  type: "add todo",
  payload: todo,
})