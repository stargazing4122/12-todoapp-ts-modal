import { TodosAction } from "../actions/todosActions";
import { Todo } from "../interfaces/interfaces";

export const todosReducer = (state: Todo[], action: TodosAction ): Todo[] => {
  switch (action.type) {
    case "add todo":
      return [...state, {...action.payload}]

    default:
      return state;
  }
}