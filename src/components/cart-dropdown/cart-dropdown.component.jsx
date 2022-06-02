import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import {ToggleCardHidden} from "../../redux/cart/cart.action";
import { Button, CardContainer, Span ,CartItemsContainer } from "./cart-dropdown.styles";

const Cart = ({ CartItems, history, dispatch }) => (
  <CardContainer>
    <CartItemsContainer>
      {CartItems.length ? (
        CartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <Span>Your cart is Empty</Span>
      )}
    </CartItemsContainer>
    <Button
      onClick={() => {
        history.push("/checkout");
        // dispatch(ToggleCardHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </CardContainer>
);

const mapStateToProps = (state) => ({
  CartItems: selectCartItem(state),
});

export default withRouter(connect(mapStateToProps)(Cart));
