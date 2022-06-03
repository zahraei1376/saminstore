import styled from "styled-components";

export const Container = styled.div`
  min-height:40rem;
  display: flex;
  padding:0 3rem;
//   justify-content: center;
//   align-items: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  border-radius: 2rem;
  margin: 5rem 10rem;
  background-color: #fff;
  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
    margin: 2rem;
    
  }
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
  // border: 1px solid transparent;
  &:hover {
    color: black;
    background-color: white;
    border: 2px solid black;
  }
`;
