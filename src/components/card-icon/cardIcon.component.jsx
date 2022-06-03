import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ToggleCardHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
  CardIconItemCount,
  CardIconPath,
  CardIconStore,
  CardIconSvg,
} from "./cardIcon.styles";

const CardIcon = ({ ToggleCardHidden, itemCount }) => (
  <CardIconStore onClick={ToggleCardHidden}>
    <CardIconSvg xmlns="http://www.w3.org/2000/svg">
      <CardIconPath d="M16 6v2h2l2 12h-20l2-12h2v-2c0-3.314 2.686-6 6-6s6 2.686 6 6v0zM14 6c0-2.209-1.791-4-4-4s-4 1.791-4 4v0 2h8v-2zM4 10v2h2v-2h-2zM14 10v2h2v-2h-2z"></CardIconPath>
    </CardIconSvg>
    <CardIconItemCount>{itemCount}</CardIconItemCount>
  </CardIconStore>
);

const mapDistpachToProps = (dispatch) => ({
  ToggleCardHidden: () => dispatch(ToggleCardHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDistpachToProps)(CardIcon);
