import { Btn } from "./btn.styles";
import React from 'react';
const LoginButton = ({text , onClick , type}) =>{
    return(
        <Btn type={type} onSubmit={onClick}>
            {text}
        </Btn>
    )
}

export default LoginButton;