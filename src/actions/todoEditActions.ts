import { Todo } from "../interfaces/interfaces"

export type TodoEditAction =
  | {
      type: 'set todo edit',
      payload: Todo,
    }
  | {
      type: 'clean todo edit',
    }

export const doTodoEditSetEdit = ( todo: Todo ): TodoEditAction => ({
  type: "set todo edit",
  payload: todo
});

export const doTodoEditCleanEdit = (): TodoEditAction => ({
  type: "clean todo edit",
});