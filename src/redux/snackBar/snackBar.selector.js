import { createSelector } from "reselect";

const selectShop = (state) => state.snackBarReducer;

export const selectShowSnack = createSelector(
  [selectShop],
  (snackBarReducer) => snackBarReducer.toggleSnack
);

export const selectSnackBarMessage = createSelector(
  [selectShop],
  (snackBarReducer) => snackBarReducer.snackbarMessage
);

export const selectSnackBarType = createSelector(
  [selectShop],
  (snackBarReducer) => snackBarReducer.type
);
