import { createContext } from "react";
import { Todo, UiState, TodoEditState } from '../interfaces/interfaces';
import { TodosAction } from '../actions/todosActions';
import { UiAction } from "../actions/uiActions";
import { TodoEditAction } from '../actions/todoEditActions';

interface Props {
  todosState: Todo[];
  todosDispatch: ( action: TodosAction ) => void;

  uiState: UiState;
  uiDispatch: ( action: UiAction ) => void;

  todoEditState: TodoEditState;
  todoEditDispatch: ( action: TodoEditAction ) => void;
}
export const TodoContext = createContext<Props>( {} as Props);