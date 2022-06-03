import React from "react";
import CustomeButton from "../customeButton/customeButton.component";
import {
  Container,
  HeadingContainer,
  HeadingSubTitle,
  HeadingTitle,
} from "./slider.styles";
import { connect } from "react-redux";
import CardIcon from "../card-icon/cardIcon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
const Slider = ({ currentUser, hidden }) => (
  <Container>
    {/* {!currentUser ? <CardIcon /> : <CustomeButton text="login" url="/login" />} */}
    <CustomeButton text="login" url="/login" />
    <CardIcon />
    {!hidden && <Cart />}
    <HeadingContainer>
      <HeadingTitle>Samin Online Store</HeadingTitle>
      <HeadingSubTitle>Experience diversity with us</HeadingSubTitle>
    </HeadingContainer>
  </Container>
);

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Slider);
