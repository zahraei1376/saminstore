import { createSelector } from "reselect";

const selectShop = (state) => state.snackBarReducer;

export const selectShowSnack = createSelector(
  [selectShop],
  (snackBarReducer) => snackBarReducer.toggleSnack
);


// const selectSnackBar = state => state.snackBarReducer;
// console.log('selectSnackBar' ,selectSnackBar);
// export const selectShowSnack = createSelector(
//     [selectSnackBar],
//     snackBarReducer => snackBarReducer.toggleSnack
// );

export const selectSnackBarMessage = createSelector(
    [selectShop],
    snackBarReducer => snackBarReducer.snackbarMessage
);

export const selectSnackBarType = createSelector(
  [selectShop],
  snackBarReducer => snackBarReducer.type
);