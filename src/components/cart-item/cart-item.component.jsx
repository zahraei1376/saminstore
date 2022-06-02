import React from 'react';
import { CardItemContainer, CarItemDetails, CarItemDetailsName, CarItemDetailsPrice, CarItemImg } from './cart-item.styles';

const CartItem = ({item: {imageUrl, name, price ,quantity} }) => (
    <CardItemContainer>
        <CarItemImg src={imageUrl} alt='item' />
        <CarItemDetails>
            <CarItemDetailsName>{name}</CarItemDetailsName>
            <CarItemDetailsPrice>{quantity} x ${price}</CarItemDetailsPrice>
        </CarItemDetails>
    </CardItemContainer>
);

export default CartItem;