import React from 'react';
import { limitRecipeTitle } from '../../functions/functions';
import { CardItemContainer, CarItemDetails, CarItemDetailsName, CarItemDetailsPrice, CarItemImg } from './cart-item.styles';

const CartItem = ({item: {image, title, price ,quantity} }) => (
    <CardItemContainer>
        <CarItemImg src={image} alt='item' />
        <CarItemDetails>
            <CarItemDetailsName>{limitRecipeTitle(title ,14)}</CarItemDetailsName>
            <CarItemDetailsPrice>{quantity} x ${price}</CarItemDetailsPrice>
        </CarItemDetails>
    </CardItemContainer>
);

export default CartItem;