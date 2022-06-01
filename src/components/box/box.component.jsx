import * as React from 'react';
import { BoxContainer, BoxDecription, BoxImg, BoxPrice, BoxTitle, Button } from "./box.styles"
import {limitRecipeTitle} from '../../functions/functions';
import defImage from '../../assets/images/backk.jpg';

const BoxStore = ({item}) =>{
    return(
        <BoxContainer href={`/showProduct/${item.id}`}>
            <BoxImg src={item.image ? item.image : defImage}/>
            <BoxTitle>{limitRecipeTitle(item.title)}</BoxTitle>
            <BoxPrice>${item.price}</BoxPrice>
            <BoxDecription>{limitRecipeTitle(item.description , 64)}</BoxDecription>
            <Button>add to card</Button>
        </BoxContainer>
    )
}

export default BoxStore;