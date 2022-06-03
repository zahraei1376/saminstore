import snackBarActionTypes from "./snackBar.types";

const INITIAL = {
  toggleSnack: false,
  snackbarMessage: null,
  type:"",
};

const SnackBarReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case snackBarActionTypes.TOGGLE_SNACKBAR_OPEN: {
      return {
        ...state,
        toggleSnack: true,
        snackbarMessage: action.payload.message,
        type: action.payload.type,
      };
    }

    case snackBarActionTypes.TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        toggleSnack: false,
        snackbarMessage: null,
      };

      
    }

    case snackBarActionTypes.SET_MESSAGE_SNACKBAR: {
      return {
        ...state,
        snackbarMessage: action.payload,
      };

    }


    default: {
      return state;
    }
  }
};

export default SnackBarReducer;
