import styled from "styled-components";

export const ShopContainer = styled.div`
  // width:100%;
  display: flex;
  //   align-items: start;
  //   justify-content: start;
  //   position: relative;
  min-height: 100vh;

  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
  }
  // flex-dierction: column;
`;

export const SidebarContainer = styled.div`
  width: 20%;
  @media only screen and (max-width: 68.75em) {
    width: 100%;
  }
`;

export const ContainerSearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Title = styled.h1`
  padding:1rem 2rem;
  margin-left:3rem;
  font-size: 3.5rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  -webkit-background-clip: text;
  border-bottom:2px solid #e67e22;
  color: #000;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  @media only screen and (max-width: 75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 2.5rem;
  }

  // &:hover {
  //   transform: skewY(2deg) skewX(15deg) scale(1.1);
  //   text-shadow: 0.5rem 1rem 2rem rgba(#000, 0.2);
  // }
`;
