import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSnackBarClose } from "../../redux/snackBar/snackBar.actions";
import {
  selectShowSnack,
  selectSnackBarMessage,
  selectSnackBarType,
} from "../../redux/snackBar/snackBar.selector";
import { Container, Span } from "./snackbar.styles";
// import Styles from "./snackbar.module.css";

const SimpleSnackbar = ({
  toggleSnackBarClose,
  messageSnackBar,
  showSnackBar,
  selectSnackBarType,
}) => {
  useEffect(() => {
    console.log('ffffffffffffff');
    setTimeout(() => {
      toggleSnackBarClose();
    }, 4000);
  }, []);
  return (
    <Container
      error={selectSnackBarType === "error" ? "error" : null}
      showSnackBar={showSnackBar ? "true" : null}
    >
      {messageSnackBar}
      <Span onClick={() => toggleSnackBarClose()}>&#10005;</Span>
    </Container>
  );
};

// const mapStateToProps = (state) => ({
//   showSnackBar: selectShowSnack(state),
//   messageSnackBar: selectSnackBarMessage(state),
// });

const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
  messageSnackBar: selectSnackBarMessage,
  selectSnackBarType: selectSnackBarType,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSnackBarClose: () => dispatch(toggleSnackBarClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
