import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ContainerProduct,
  Image,
  ImageContainer,
  InfoContainer,
  ShowDecription,
  ShowPrice,
  ShowTitle,
} from "./showProduct.styles";
import defImage from "../../assets/images/backk.jpg";
import { useParams } from "react-router-dom";

const ShowProduct = () => {
  let { id } = useParams();
  const [item, setItem] = useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItem(json);
      });
  }, [id]);

  return (
    <Container>
      <ContainerProduct>
        <InfoContainer>
          <ShowTitle>{item && item.title}</ShowTitle>
          <ShowPrice>${item && item.price}</ShowPrice>
          <ShowDecription>{item && item.description}</ShowDecription>
          <Button>add to card</Button>
        </InfoContainer>
        <ImageContainer>
          <Image src={item && item.image ? item.image : defImage} />
        </ImageContainer>
      </ContainerProduct>
    </Container>
  );
};

export default ShowProduct;
