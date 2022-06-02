import React from "react";
import CustomeButton from "../customeButton/customeButton.component";
import {
  Container,
  HeadingContainer,
  HeadingSubTitle,
  HeadingTitle,
} from "./slider.styles";
import {connect} from 'react-redux';
import CardIcon from '../card-icon/cardIcon.component';
const Slider = ({currentUser}) => (
  <Container>
    {currentUser ? (
      <CardIcon/>
    ) : (
        <CustomeButton text="login" url="/login"/>
    )}
    <HeadingContainer>
      <HeadingTitle>Samin Online Store</HeadingTitle>
      <HeadingSubTitle>Experience diversity with us</HeadingSubTitle>
    </HeadingContainer>
  </Container>
);

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Slider);
