import * as React from "react";
import {
  BoxContainer,
  BoxDecription,
  BoxImg,
  BoxPrice,
  BoxTitle,
  Button,
} from "./box.styles";
import { limitRecipeTitle } from "../../functions/functions";
import defImage from "../../assets/images/backk.jpg";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setMessageSnackBar,
  toggleSnackBarClose,
  toggleSnackBarOpen,
} from "../../redux/snackBar/snackBar.actions";
import { selectShowSnack } from "../../redux/snackBar/snackBar.selector";
import SimpleSnackbar from "../snackbar/snackbar.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const BoxStore = ({ item, addItem, showSnackBar, toggleSnackBarOpen, currentUser }) => {
  let history = useHistory();
  return (
    <BoxContainer
      onClick={() => history.push(`/showProduct/${item.id}`)}
    >
      <BoxImg src={item.image ? item.image : defImage} />
      <BoxTitle>{limitRecipeTitle(item.title, 14)}</BoxTitle>
      <BoxPrice>${item.price}</BoxPrice>
      <BoxDecription>{limitRecipeTitle(item.description, 64)}</BoxDecription>
      <Button
        onClick={(e) => {
          if (currentUser) {
            addItem(item);
            toggleSnackBarOpen({
              message: "add to card",
              type: "seccess",
            });
          } else {
            history.push('/login')
          }

          e.stopPropagation();
        }}
      >
        add to card
      </Button>
      {showSnackBar && <SimpleSnackbar />}
    </BoxContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  setMessageSnackBar: (message) => dispatch(setMessageSnackBar(message)),
  toggleSnackBarClose: () => dispatch(toggleSnackBarClose()),
  toggleSnackBarOpen: (message) => dispatch(toggleSnackBarOpen(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxStore);
