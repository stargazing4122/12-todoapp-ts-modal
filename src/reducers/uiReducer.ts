import { UiAction } from "../actions/uiActions";
import { UiState } from "../interfaces/interfaces";

export const uiReducer = ( state: UiState, action: UiAction ): UiState => {
  switch (action.type) {
    
    case "open modal":
      return {
        ...state,
        openModal: true,
      }

    case "close modal":
      return {
        ...state,
        openModal: false,
      }
  
    default:
      return state;
  }
}
