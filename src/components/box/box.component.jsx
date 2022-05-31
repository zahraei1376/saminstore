import * as React from 'react';
import { BoxContainer, BoxDecription, BoxImg, BoxPrice, BoxTitle, Button } from "./box.styles"
import {limitRecipeTitle} from '../../functions/functions';

const BoxStore = ({item}) =>{
    return(
        <BoxContainer>
            <BoxImg src={item.image}/>
            <BoxTitle>{limitRecipeTitle(item.title)}</BoxTitle>
            <BoxPrice>${item.price}</BoxPrice>
            <BoxDecription>{limitRecipeTitle(item.description , 64)}</BoxDecription>
            <Button>add to card</Button>
        </BoxContainer>
    )
}

export default BoxStore;