import React, { useState, useEffect } from "react";
import { setCurrentUser } from "../../redux/user/user.action";
import { connect } from "react-redux";
// import MySnackbar from '../../messageBox/messageBox.component';
import {
  ContainerGroup,
  IconContainer,
  SectionLogin,
  LoginBox,
  TitleLogin,
  LoginFormContainer,
  LoginForm,
  FormGroup,
  FormGroupBtn,
  FormInput,
  LoginLink,
  FormLabel,
  LoginDescContainer,
  LoginDesc,
  FooterLogin,
  FooterLoginText,
  FooterLoginLink,
  MyLockOutlinedIcon,
  MyPersonOutlineIcon,
  ErrorTag,
} from "./login-register.styles";
import { useForm } from "react-hook-form";
import LoginButton from "../../components/btn/btn.component";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  setMessageSnackBar,
  toggleSnackBarClose,
  toggleSnackBarOpen,
} from "../../redux/snackBar/snackBar.actions";
import { selectShowSnack } from "../../redux/snackBar/snackBar.selector";
import MySpinner from "../../components/spinner/spinner.component";
import SimpleSnackbar from "../../components/snackbar/snackbar.component";
import { createStructuredSelector } from "reselect";
const LoginPage = ({
  setCurrentUser,
  type,
  url,
  toggleSnackBarClose,
  toggleSnackBarOpen,
  setMessageSnackBar,
  showSnackBar,
}) => {
  ////////////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /////////////////////////
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  /////////////////////////
  let history = useHistory();
  //////////////////////////
  const onSubmit = async(data) => {
    setLoading((pre) => !pre);
    console.log("data", data);
    await axios
      .post(`https://cors-anywhere.herokuapp.com/${url}`, data)
      .then((res) => {
        console.log("res", res);
        console.log(res);
        if (type === "login") {
          setCurrentUser(res.token ? res.token : null);
        } else {
          history.push("/login");
        }
        // setMessageSnackBar("The operation was successful");
        setLoading((pre) => !pre);
        toggleSnackBarOpen({message:"The operation was successful" , type:"seccess"});
      })
      .catch((err) => {
        console.log(err.message);
        // setMessageSnackBar(err.message);
        setLoading((pre) => !pre);
        toggleSnackBarOpen({message:err.message , type:"error"});
      });
  };
  ///////////////////////
  return (
    <SectionLogin>
      <LoginBox>
        <TitleLogin>{type === "register" ? "sign up" : "sign in"}</TitleLogin>
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
      {loading ? <MySpinner /> : ""}
    </SectionLogin>
  );
  /////////////////////////
};

// const mapStateToProps = (state) => ({
//   showSnackBar: selectShowSnack(state),
//   // messageSnackBar:selectSnackBarMessage(state)
// });

const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setMessageSnackBar: (message) => dispatch(setMessageSnackBar(message)),
  toggleSnackBarClose: () => dispatch(toggleSnackBarClose()),
  toggleSnackBarOpen: (message) => dispatch(toggleSnackBarOpen(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
