import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: 1rem;
  padding: 2rem;
  width: 16rem;
  height: 24rem;
  border: 1px solid #777;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  z-index: 5;
  transition: all 0.6s;
`;

export const CartItemsContainer = styled.div`
  height: 14rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Span = styled.span`
  font-size: 1.4rem;
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
