import { Todo } from "../interfaces/interfaces"

export const todosInit = (): Todo[] => {
  return (JSON.parse(localStorage.getItem('list-todos-ts') || '[]'));
}