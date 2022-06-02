import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: 6rem;
  padding: 2rem;
  width: 32rem;
  height: 34rem;
  border: 1px solid #777;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  z-index: 5;
  transition: all 0.6s;
`;

export const CartItemsContainer = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Span = styled.span`
  font-size: 2rem;
  margin: 5rem auto;
`;

export const Button = styled.button`
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  height: 4rem;
  padding: 0 2.5rem 0 2.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: none;
  align-items: center;
  cursor: pointer;
  color: white;
  background-color: #e67e22;
  //   border:1px solid transparent;

  &:hover {
    color: #e67e22;
    background-color: #1f1f1f;
    border: 1px solid black;
    text-decoration: none;
    outline: none;
    border: none;
    // border:1px solid #e67e22;
  }
`;
