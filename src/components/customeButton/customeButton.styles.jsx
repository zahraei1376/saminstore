import styled from "styled-components";

export const Button = styled.a`
  text-align: center;
  display: flex;
  justify-content:center;
  align-items:center;
  min-width: 10rem;
  width: auto;
  height: 4rem;
  padding: 0 2.5rem 0 2.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: 1px solid #e67e22;
  align-items: center;
  cursor: pointer;
  color: white;
  background-color: #e67e22;
  margin-right: 2rem;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    text-decoration: none;
  }
`;
