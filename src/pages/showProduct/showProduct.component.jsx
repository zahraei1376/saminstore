import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ContainerButton,
  ContainerProduct,
  Image,
  ImageContainer,
  InfoContainer,
  ShowDecription,
  ShowPrice,
  ShowTitle,
  Title,
  TitleContainer,
} from "./showProduct.styles";
import defImage from "../../assets/images/backk.jpg";
import { useParams } from "react-router-dom";
import MySpinner from "../../components/spinner/spinner.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import { toggleSnackBarOpen } from "../../redux/snackBar/snackBar.actions";
import { selectShowSnack } from "../../redux/snackBar/snackBar.selector";
import SimpleSnackbar from "../../components/snackbar/snackbar.component";
import { createStructuredSelector } from "reselect";

const ShowProduct = ({ addItem, showSnackBar, toggleSnackBarOpen }) => {
  let { id } = useParams();
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
        setLoading(false);
      });
  }, [id]);

  return (
    <Container>
      {showSnackBar && <SimpleSnackbar />}
      <TitleContainer>
        <Title>Show select Product</Title>
      </TitleContainer>
      <ContainerProduct>
        {loading ? (
          <MySpinner />
        ) : (
          <>
            <ImageContainer>
              <Image src={item && item.image ? item.image : defImage} />
            </ImageContainer>
            <InfoContainer>
              <ShowTitle>{item && item.title}</ShowTitle>
              <ShowPrice>${item && item.price}</ShowPrice>
              <ShowDecription>{item && item.description}</ShowDecription>
              <ContainerButton>
                <Button
                  onClick={() => {
                    toggleSnackBarOpen({
                      message: "add to card",
                      type: "seccess",
                    });
                    addItem(item);
                  }}
                >
                  add to card
                </Button>
              </ContainerButton>
            </InfoContainer>
          </>
        )}
      </ContainerProduct>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleSnackBarOpen: (message) => dispatch(toggleSnackBarOpen(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
