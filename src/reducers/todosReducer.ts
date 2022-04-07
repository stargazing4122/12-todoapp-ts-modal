import { TodosAction } from "../actions/todosActions";
import { Todo } from "../interfaces/interfaces";

export const todosReducer = (state: Todo[], action: TodosAction ): Todo[] => {
  switch (action.type) {
    case 'add todo':
      return [...state, {...action.payload}]

    case 'toggle state':
      return state.map( todo => (
        todo.id === action.payload.todoId
          ? {...todo, state: !todo.state}
          : todo
      ));

    case 'delete todo':
      return state.filter( todo => todo.id !== action.payload.todoId );

    case "update todo":
      return state.map( todo => (
        todo.id === action.payload.id
          ? { ...action.payload}
          : todo
      ))
    
    default:
      return state;
  }
}