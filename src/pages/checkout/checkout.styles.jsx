import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  padding:2rem;
  border-radius:1rem;
  background-color:#fff;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
  font-size: 1.2rem;
  @media screen and (max-width: 37.5em) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
//   padding-bottom:1rem;
  margin-bottom:2rem;
  border-bottom: 1px solid darkgray;
`;

export const CheckoutHeaderBlock = styled.div`
  width: 20%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: Center;
//   border-bottom: 1px solid darkgray;
`;

export const CheckoutHeaderSpan = styled.span`
  text-transform: capitalize;
  font-size: 3rem;
  // border-bottom:1px solid #000;
//   margin-top:4rem;
`;
