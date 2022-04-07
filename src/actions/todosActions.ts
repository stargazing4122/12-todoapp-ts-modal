import { Todo } from "../interfaces/interfaces";

export type TodosAction =
  | {
      type: 'add todo';
      payload: Todo;
    }
  | {
      type: 'toggle state';
      payload: {
        todoId: string;
      }
    }
  | {
      type: 'delete todo';
      payload: {
        todoId: string;
      }
    }

// synchronous actions

export const doTodosAddNewTodo = ( todo: Todo ): TodosAction => ({
  type: "add todo",
  payload: todo,
});

export const doTodosToggleState = ( todoId: string ): TodosAction => ({
  type: "toggle state",
  payload: {
    todoId,
  }
});

export const doTodosDeleteTodo = ( todoId: string ): TodosAction => ({
  type: "delete todo",
  payload: {
    todoId,
  }
});
