import snackBarActionTypes from "./snackBar.types";

const INITIAL = {
  toggleSnack: false,
  snackbarMessage: null,
};

const SnackBarReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case snackBarActionTypes.TOGGLE_SNACKBAR_OPEN: {
      return {
        ...state,
        toggleSnack: true,
        snackbarMessage: action.message,
      };
    }

    case snackBarActionTypes.TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        toggleSnack: false,
        snackbarMessage: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default SnackBarReducer;
