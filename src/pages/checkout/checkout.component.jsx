import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItem,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutHeaderSpan,
  CheckoutHeaderSpanTotal,
  CheckoutHeaderBlockTotal,
  Button,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeader>
      <CheckoutHeaderBlock>
        <CheckoutHeaderSpan>Product</CheckoutHeaderSpan>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <CheckoutHeaderSpan>Title</CheckoutHeaderSpan>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <CheckoutHeaderSpan>Quantity</CheckoutHeaderSpan>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <CheckoutHeaderSpan>Price</CheckoutHeaderSpan>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <CheckoutHeaderSpan>Remove</CheckoutHeaderSpan>
      </CheckoutHeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
    ))}

    <CheckoutHeaderBlockTotal>
      <CheckoutHeaderSpanTotal>TOTAL:${total}</CheckoutHeaderSpanTotal>
      <Button href="#">Complete purchase process</Button>
    </CheckoutHeaderBlockTotal>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
