import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ContainerButton,
  ContainerProduct,
  GoBack,
  Image,
  ImageContainer,
  InfoContainer,
  NotFoundContainer,
  P,
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
import axios from "axios";
import { useHistory } from "react-router-dom";
import {selectCurrentUser} from '../../redux/user/user.selectors';

const ShowProduct = ({ addItem, showSnackBar, toggleSnackBarOpen , currentUser }) => {
  let { id } = useParams();
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(true);

  let history = useHistory();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toggleSnackBarOpen({ message: err.message, type: "error" });
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
            {item ? (
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
                        if(currentUser){
                          addItem(item);
                          toggleSnackBarOpen({
                            message: "add to card",
                            type: "seccess",
                          });
                        }else{
                          history.push('/login')
                        }
                      }}
                    >
                      add to card
                    </Button>
                  </ContainerButton>
                </InfoContainer>
              </>
            ) : (
              <NotFoundContainer>
              <P>dont found your product</P>
              <GoBack href="/">go back</GoBack>
              </NotFoundContainer>
            )}
          </>
        )}
      </ContainerProduct>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleSnackBarOpen: (message) => dispatch(toggleSnackBarOpen(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
