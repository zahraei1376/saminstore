import styled from "styled-components";

export const Button = styled.button`
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
  background-color:  #e67e22;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;