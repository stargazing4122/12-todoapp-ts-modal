import { Todo } from "../interfaces/interfaces";

export type TodosAction =
  | {
      type: 'add todo';
      payload: Todo;
    }