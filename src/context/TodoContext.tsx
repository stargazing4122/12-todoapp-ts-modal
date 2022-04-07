import { createContext } from "react";
import { Todo } from "../interfaces/interfaces";
import { TodosAction } from '../actions/todosActions';

interface Props {
  todosState: Todo[];
  todosDispatch: ( action: TodosAction ) => void;
}
export const TodoContext = createContext<Props>( {} as Props);