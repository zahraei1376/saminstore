import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, #fff, #e67e22, #fff);
`;

export const ContainerProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  border-radius: 2rem;
  margin: 10rem;
  background-color: #fff;
  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
    margin: 2rem;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // width:100%;
    // box-sizing:border-box;
    // transform: translate(-50%, -50%);
  }
`;

export const ImageContainer = styled.div`
  width: 50rem;
  margin-right: 5rem;
  @media only screen and (max-width: 68.75em) {
    margin-right: 0;
    margin-top:6rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 68.75em) {
    margin-bottom: 3rem;
  }
`;

export const ShowTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 4.5rem;
  color: black;
`;

export const ShowPrice = styled.p`
  width: 100%;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  margin-top: 3rem;
`;

export const ShowDecription = styled.p`
  width: 100%;
  height: 6rem;
  object-fit: cover;
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 1rem 3rem 1rem 3rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: none;
  align-items: center;
  cursor: pointer;
  color: white;
  background-color: #e67e22;
  margin-top: 4rem;
  border: 1px solid transparent;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;
