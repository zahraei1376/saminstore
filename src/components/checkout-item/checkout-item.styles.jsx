import styled, { css } from "styled-components";
const IconsCss = css`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: Center;
  font-size:2rem;
  @media screen and (max-width: 37.5em) {
    width: 50%;
    text-align: center;
  }
`;
export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
//   @media screen and (max-width: 37.5em) {
//     flex-direction: column;
//   }
`;

export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 1.5rem;

  @media screen and (max-width: 37.5em) {
    width: 50%;
    padding-right: 0;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 100%;
  padding: 1rem 1rem 1rem 0;
`;

export const CheckOutItemName = styled.span`
  ${IconsCss}
`;

export const CheckOutItemQuantity = styled.span`
  ${IconsCss};
//   display: flex;
//   align-items: center;
//   justify-content: center;
`;

export const CheckOutItemPrice = styled.span`
  ${IconsCss}
`;

export const CheckOutItemArrow = styled.div`
  cursor: pointer;
`;

export const CheckOutItemValue = styled.div`
  margin: 0 1rem;
`;

export const CheckOutItemRemoveButton = styled.div`
  cursor: pointer;
  ${IconsCss}
`;
