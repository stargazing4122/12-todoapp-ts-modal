export type UiAction =
  | {
      type: 'open modal'
    }
  | {
      type: 'close modal'
    }

    
export const doUiOpenModal = (): UiAction => ({
  type: "open modal",
});

export const doUiCloseModal = (): UiAction => ({
  type: "close modal",
});