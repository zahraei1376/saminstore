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

const SimpleSnackbar = ({
  toggleSnackBarClose,
  messageSnackBar,
  showSnackBar,
  selectSnackBarType,
}) => {
  useEffect(() => {
    setTimeout(() => {
      toggleSnackBarClose();
    }, 2000);
  }, []);
  return (
    <Container
      error={selectSnackBarType === "error" ? "error" : null}
      showSnackBar={showSnackBar ? "true" : null}
    >
      {messageSnackBar}
      <Span onClick={(e) => {toggleSnackBarClose(); e.stopPropagation()}}>&#10005;</Span>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
  messageSnackBar: selectSnackBarMessage,
  selectSnackBarType: selectSnackBarType,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSnackBarClose: () => dispatch(toggleSnackBarClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
