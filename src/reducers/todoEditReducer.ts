import { TodoEditAction } from "../actions/todoEditActions";
import { TodoEditState } from "../interfaces/interfaces";

export const todoEditReducer = ( state: TodoEditState, action: TodoEditAction ): TodoEditState => {
  switch (action.type) {
    case "set todo edit":
      return {
        ...state,
        todoEdit: {...action.payload}
      }
    
    case "clean todo edit":
      return {
        ...state,
        todoEdit: null,
      } 
  
    default:
      return state;
  }
}
