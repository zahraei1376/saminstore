import React, { useState, useEffect } from "react";
import { setCurrentUser } from "../../redux/user/user.action";
import { connect } from "react-redux";
// import MySnackbar from '../../messageBox/messageBox.component';
import {
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
} from "./login.styles";
import LoginButton from "../../components/btn/btn.component";

// import {Title ,MarginBottomRightMedium ,Btn} from '../../../generalCss/generalCss.styles';
// import MySpinner from '../../MySpinner/MySpinner.component';
const LoginPage = (props) => {
  /////////////////////////
  const [fiels, setFiels] = useState({
    username: "",
    pass: "",
  });
  /////////////////////////
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  /////////////////////////
  const handleSetFeild = (val, param) => {
    setFiels({ ...fiels, [param]: val });
  };
  /////////////////////////
  const submitLogin = async (e) => {
    e.preventDefault();
    console.log('fffffffffff');
    setLoading(true);
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        props.setCurrentUser(json.token ? json.token : null);
      })
      .catch((err) => {
        console.log(err);
      });
    // if(fiels.username !=""  && fiels.pass){
    //     const data = {
    //         username: fiels.username,
    //         password:fiels.pass,
    //     }

    //     await fetch("http://185.165.118.211:9074/api/v1/Users/Login", {
    //         headers: {
    //             'Content-Type': 'application/json'
    //             },
    //         method:"POST",
    //         body: JSON.stringify(data)
    //     })
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((dataRes)=>{
    //         console.log('dataRes',dataRes);
    //         if(dataRes.isSuccess){
    //             setStatus('1')
    //             setMessage('ورود موفقیت آمیز بود میتوانید به بخش های مدیریتی بروید');
    //             setShowMessage(true);
    //             props.setCurrentUser(dataRes.data ? dataRes.data.token : null);
    //             props.setUserInfo(dataRes.data);
    //             setLoading(false);

    //         }else{
    //             setStatus('0')
    //             setMessage(dataRes.message)
    //             setShowMessage(true);
    //             setLoading(false);
    //         }

    //     })
    //     .catch(err => {
    //         setStatus('0')
    //         setMessage(err.message)
    //         setShowMessage(true);
    //         setLoading(false);
    //     });

    // }
    // else{
    //     setStatus('0')
    //     setMessage('ابتدا مقادیر خواسته شده را پر کنید')
    //     setShowMessage(true);
    //     setLoading(false);
    // }
  };
  /////////////////////////
  return (
    <SectionLogin>
      <LoginBox>
        <TitleLogin>sign in</TitleLogin>
        <LoginForm action="#">
          <FormGroup>
            <FormInput
              type="text"
              placeholder="نام کاربری"
              id="username"
              required
              onChange={(e) => handleSetFeild(e.target.value, "username")}
            />
            <IconContainer>
              <MyPersonOutlineIcon />
            </IconContainer>
          </FormGroup>

          <FormGroup>
            <FormInput
              type="password"
              placeholder="پسورد"
              id="pass"
              required
              onChange={(e) => handleSetFeild(e.target.value, "pass")}
            />
            <IconContainer>
              <MyLockOutlinedIcon />
            </IconContainer>
          </FormGroup>

          <FormGroupBtn>
            <LoginButton text={"sign in"} onClick={(e) => submitLogin(e)} />
          </FormGroupBtn>

          <LoginLink to="#">Click to register</LoginLink>
        </LoginForm>
      </LoginBox>
      <FooterLogin>
        <FooterLoginText>
          Built by <FooterLoginLink href="#">Zahra Alipour</FooterLoginLink>.
          Copyright &copy; by Zahra Alipour
        </FooterLoginText>
      </FooterLogin>
      {/* {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            } */}
      {/* {
                loading ? <MySpinner/> : ''
            } */}
    </SectionLogin>
  );
  /////////////////////////
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
