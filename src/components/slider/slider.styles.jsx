import styled from "styled-components";
import back from "../../assets/images/backk2.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  display:flex; 
  justify-content:center;
  align-items:center;
  position:relative;
`;

export const HeadingContainer = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;

export const HeadingTitle = styled.h1`
    font-size:5rem;
    color:#fff;
`;

export const HeadingSubTitle = styled.h2`
    font-size:3rem;
    color:#fff;
    margin-top:2rem;
`;
