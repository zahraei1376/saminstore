import snackBarActionTypes from "./snackBar.types";

export const toggleSnackBarOpen = (message) => ({
  type: snackBarActionTypes.TOGGLE_SNACKBAR_OPEN,
  payload:message
});

export const toggleSnackBarClose = () => ({
  type: snackBarActionTypes.TOGGLE_SNACKBAR_CLOSE,
  // payload:toggle
});


export const setMessageSnackBar = (message) => ({
  type: snackBarActionTypes.SET_MESSAGE_SNACKBAR,
  payload:message
});

