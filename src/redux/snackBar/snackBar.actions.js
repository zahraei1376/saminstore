import snackBarActionTypes from "./snackBar.types";

export const toggleSnackBar = (toggle) => ({
  type: snackBarActionTypes.TOGGLE_SNACKBAR_OPEN,
  payload:toggle
});


export const setMessageSnackBar = (message) => ({
  type: snackBarActionTypes.TOGGLE_SNACKBAR_OPEN,
  payload:message
});

