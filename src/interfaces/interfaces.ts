export interface Todo {
  id: string;
  todoName: string;
  state: boolean;
}

export interface UiState {
  openModal: boolean;
}

export interface TodoEditState {
  todoEdit: Todo | null;
}