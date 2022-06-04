import React, { useState } from "react";
import { setCurrentUser } from "../../redux/user/user.action";
import { connect } from "react-redux";
import {
  ContainerGroup,
  IconContainer,
  SectionLogin,
  LoginBox,
  TitleLogin,
  LoginForm,
  FormGroup,
  FormGroupBtn,
  FormInput,
  LoginLink,
  FooterLogin,
  FooterLoginText,
  FooterLoginLink,
  MyLockOutlinedIcon,
  MyPersonOutlineIcon,
  ErrorTag,
  TitleContainer,
  TitleDescription,
} from "./login-register.styles";
import { useForm } from "react-hook-form";
import LoginButton from "../../components/btn/btn.component";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toggleSnackBarOpen } from "../../redux/snackBar/snackBar.actions";
import { selectShowSnack } from "../../redux/snackBar/snackBar.selector";
import MySpinner from "../../components/spinner/spinner.component";
import SimpleSnackbar from "../../components/snackbar/snackbar.component";
import { createStructuredSelector } from "reselect";
const LoginPage = ({
  setCurrentUser,
  type,
  url,
  toggleSnackBarOpen,
  showSnackBar,
}) => {
  ////////////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /////////////////////////
  const [loading, setLoading] = useState(false);
  /////////////////////////
  let history = useHistory();
  //////////////////////////
  const onSubmit = async (data) => {
    setLoading((pre) => !pre);
    await axios
      .post(url, type === 'login' ? {
        username: "mor_2314",
        password: "83r5^_"
    }:data)
      .then((res) => {
        if (type === "login") {
          setCurrentUser(res.token ? res.token : null);
        } else {
          history.push("/login");
        }
        setLoading((pre) => !pre);
        toggleSnackBarOpen({
          message: "The operation was successful",
          type: "seccess",
        });
      })
      .catch((err) => {
        setLoading((pre) => !pre);
        toggleSnackBarOpen({ message: err.message, type: "error" });
      });
  };
  ///////////////////////
  return (
    <SectionLogin>
      <LoginBox>
        <TitleContainer>
          {loading ? <MySpinner margin="true" /> : ""}
          <TitleLogin>{type === "register" ? "sign up" : "sign in"}</TitleLogin>
        </TitleContainer>
        <TitleDescription>{type === "login" ? "There is a test project and fakeapi is used and logged in with a test user, please fill in only the username and password boxes" : "" }</TitleDescription>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <ContainerGroup>
            <FormGroup>
              <FormInput
                err={errors.username ? true : null}
                {...register("username", {
                  required: "username is required",
                })}
                type="text"
                placeholder="username"
                id="username"
              />
              <IconContainer>
                <MyPersonOutlineIcon />
              </IconContainer>
            </FormGroup>
            {errors.username && <ErrorTag>username is required</ErrorTag>}
          </ContainerGroup>
          <ContainerGroup>
            <FormGroup>
              <FormInput
                err={errors.password ? true : null}
                {...register("password", {
                  required: "username is required",
                })}
                type="password"
                placeholder="password"
                id="password"
              />
              <IconContainer>
                <MyLockOutlinedIcon />
              </IconContainer>
            </FormGroup>
            {errors.password && <ErrorTag>password is required</ErrorTag>}
          </ContainerGroup>
          <FormGroupBtn>
            <LoginButton
              text={type === "register" ? "sign up" : "sign in"}
              type="submit"
            />
          </FormGroupBtn>

          <LoginLink to={type === "register" ? "/login" : "/register"}>
            Click to {type === "register" ? "login" : "register"}
          </LoginLink>
        </LoginForm>
      </LoginBox>
      <FooterLogin>
        <FooterLoginText>
          Built by <FooterLoginLink href="#">Zahra Alipour</FooterLoginLink>.
          Copyright &copy; by Zahra Alipour
        </FooterLoginText>
      </FooterLogin>
      {showSnackBar && <SimpleSnackbar />}
    </SectionLogin>
  );
  /////////////////////////
};

const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  toggleSnackBarOpen: (message) => dispatch(toggleSnackBarOpen(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
