import { Button } from "./customeButton.styles";
import React from 'react';
const CustomeButton = ({text , url}) =>{
    return(
        <Button href={url}>
            {text}
        </Button>
    )
}

export default CustomeButton;