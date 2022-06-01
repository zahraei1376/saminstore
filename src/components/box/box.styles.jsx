import styled from "styled-components";


export const BoxImg = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
//   filter: grayscale(90%);
`;

export const BoxContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  cursor:pointer;
  transition:all .5s;
  text-decoration:none;
  color:black;

  &:hover{
    text-decoration:none;
    color:black;
    background-color:rgba(253,222,202,.2);
    //   ${BoxImg}{
    //     filter: grayscale(0);
    //   }
  }
`;



export const BoxTitle = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
  color:black;
`;

export const BoxPrice = styled.p`
  width: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:black;
`;

export const BoxDecription = styled.p`
  width: 100%;
  height: 6rem;
  object-fit: cover;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:black;
`;

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
  background-color: rgba(0, 0, 0, 0.9);

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;
