import React from 'react';
import { connect} from 'react-redux';
import { ClearItemFromCart ,RemoveItem,addItem } from '../../redux/cart/cart.action';
import { CheckOutItemArrow, CheckOutItemContainer, CheckOutItemName, CheckOutItemPrice, CheckOutItemQuantity, CheckOutItemRemoveButton, CheckOutItemValue, Image, ImageContainer } from './checkout-item.styles';

const CheckOutItem=({cartItem,clearItem ,addItem,RemoveItem})=>{
    const { image,title,quantity,price}=cartItem;
    return(
        <CheckOutItemContainer>
            <ImageContainer>
                <Image src={image} alt='item' />
            </ImageContainer>
            <CheckOutItemName>{title}</CheckOutItemName>
            <CheckOutItemQuantity>
                <CheckOutItemArrow onClick={() =>RemoveItem(cartItem)}>&#10094;</CheckOutItemArrow>
                <CheckOutItemValue>{quantity}</CheckOutItemValue>
                <CheckOutItemArrow onClick={()=> addItem(cartItem)}>&#10095;</CheckOutItemArrow>
            </CheckOutItemQuantity>
            <CheckOutItemPrice>{price}</CheckOutItemPrice>
            <CheckOutItemRemoveButton onClick={()=> clearItem(cartItem)}>&#10005;</CheckOutItemRemoveButton>
        </CheckOutItemContainer>
    )};
const mapDispatchToProps = dispatch =>({
    clearItem: item =>dispatch(ClearItemFromCart(item)),
    addItem: item =>dispatch(addItem(item)),
    RemoveItem: item =>dispatch(RemoveItem(item))
})

export default connect(null , mapDispatchToProps )(CheckOutItem);