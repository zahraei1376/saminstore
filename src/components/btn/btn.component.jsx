import { Btn } from "./btn.styles";
import React from 'react';
const LoginButton = ({text , onClick}) =>{
    return(
        <Btn onClick={onClick}>
            {text}
        </Btn>
    )
}

export default LoginButton;