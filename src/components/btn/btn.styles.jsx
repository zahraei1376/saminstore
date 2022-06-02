import styled from "styled-components";
export const Btn = styled.button`
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
