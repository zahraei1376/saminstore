import React from "react";
import { Container, Image } from "./notFound.styles";
import notFoundImage from '../../assets/images/notFound.webp';

const NotFoundPage = () =>{
    return(
        <Container>
            <Image src={notFoundImage} />
        </Container>
    )
};

export default NotFoundPage;