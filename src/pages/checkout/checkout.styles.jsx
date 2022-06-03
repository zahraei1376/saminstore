import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #fff;
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
  margin-bottom: 2rem;
  border-bottom: 1px solid darkgray;
`;

export const CheckoutHeaderBlock = styled.div`
  width: 20%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: Center;
`;

export const CheckoutHeaderSpan = styled.span`
  text-transform: capitalize;
  font-size: 3rem;
`;

export const CheckoutHeaderSpanTotal = styled.span`
  text-transform: capitalize;
  font-size: 3rem;
  margin-top: 6rem;
`;

export const Button = styled.a`
  padding: 1rem 3rem 1rem 3rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: none;
  border: 2px solid #e67e22;
  align-items: center;
  cursor: pointer;
  color: #e67e22;
  background-color: transparent;
  border-radius: 1rem;
  margin-top: 4rem;
  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
    border: 2px solid black;
  }
`;

export const CheckoutHeaderBlockTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: Center;
  margin-top: auto;
`;
