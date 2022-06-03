import styled, { css } from "styled-components";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";

const IconsCss = css`
  font-size: 2rem !important;
  color: #fff;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const IconContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyPersonOutlineIcon = styled(PersonOutlineIcon)`
  ${IconsCss}
`;

export const MyLockOutlinedIcon = styled(LockOutlinedIcon)`
  ${IconsCss}
`;

export const TitleLogin = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  -webkit-background-clip: text;
  color: #fff;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  @media only screen and (max-width: 75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 2.5rem;
  }

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(#000, 0.2);
  }
`;

export const SectionLogin = styled.div`
  padding: 15rem 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right bottom, #fff, #e67e22, #fff);
  background-size: 100%;
  background-position: center;

  @media only screen and (max-width: 56.25em) {
    padding: 10rem 0;
  } ;
`;

export const LoginBox = styled.div`
  border-radius: 1rem;
  width: 40%;
  padding: 5rem 10rem;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 75em) {
    width: 45%;
    padding: 5rem 6rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 65%;
    padding: 5rem 4rem;
  } ;
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #fff;
`;

export const ContainerGroup = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorTag = styled.p`
  color: #930b0b;
  font-size: 2rem;
  margin: 0;
`;

export const FormGroupBtn = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FormInput = styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1rem 2rem;
  border-radius: 2px;
  background-color: rgba(256, 256, 256, 0.9);
  border: none;
  width: 90%;
  display: block;
  transition: all 0.3s;
  border-bottom: ${(props) =>
    props.err ? "3px solid #930B0B" : "3px solid transparent"};

  @media only screen and (max-width: 56.25em) {
    width: 100%;
  }

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(#000, 0.1);
  }

  &::-webkit-input-placeholder {
    color: #999;
  }
`;

export const LoginLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  margin: 2rem 0 4rem 0;

  &:hover {
    color: #eee;
  }
`;

export const FooterLogin = styled.div`
  width: 55%;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-top: auto;
  @media only screen and (max-width: 75em) {
    width: 75%;
  }

  @media only screen and (max-width: 56.25em) {
    width: 85%;
  } ;
`;

export const FooterLoginText = styled.p`
  width: 70%;
  text-align: center;
  padding-top: 2rem;
  width: 80%;
  color: #fff;
`;

export const FooterLoginLink = styled.a`
  &:link,
  &:visited {
    color: #f7f7f7;
    background-color: #333;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.2s;
    padding: 5px;
  }

  &:hover,
  &:active {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: rotate(5deg) scale(1.3);
  }
`;
