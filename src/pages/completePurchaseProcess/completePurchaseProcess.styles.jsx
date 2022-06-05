import styled from "styled-components";

export const Container = styled.div`
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

export const ContainerSelect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  align-self: start;
  min-width: 10rem;
  width: auto;
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
  background-color: rgba(0, 0, 0, 0.9);
  margin-top: 5rem;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;
