export type uiState = {
  showModalSettings: boolean;
  showModalAddThread: boolean;
};

export interface RootState {
  ui: uiState;
}
